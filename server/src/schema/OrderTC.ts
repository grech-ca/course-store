import { composeMongoose } from 'graphql-compose-mongoose';

import mongoose from 'mongoose';

import 'dotenv';

import { Product, ProductSchema, ProductTC } from './ProductTC';

export type OrderedProduct = {
  product: string;
  quantity: number;
};

export interface OrderDoc extends mongoose.Document {
  id: string;
  quantity: number;
  name: string;
  lastName: string;
  phone: string;
  adress: string;
  orderedProducts: OrderedProduct[];
}

export interface OrderedProductDoc extends mongoose.Document {
  quantity: number;
  product: string;
}

export const OrderedProductSchema = new mongoose.Schema({
  type: mongoose.Schema.Types.Mixed,
  quantity: Number,
  product: mongoose.Schema.Types.ObjectId,
}, {
  timestamps: true,
});

export const OrderSchema = new mongoose.Schema({
  orderedProducts: {
    type: [OrderedProductSchema],
    default: [],
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'InProcess', 'Finished', 'Cancelled'],
    default: 'Pending',
    required: true,
  },
}, {
  timestamps: true
});

OrderSchema.index({ createdAt: 1 });

const Order = mongoose.model<OrderDoc>('Order', OrderSchema);
const OrderedProduct = mongoose.model<OrderedProductDoc>('OrderedProduct', OrderedProductSchema);

export const OrderTC = composeMongoose(Order, {});
export const OrderedProductTC = composeMongoose(OrderedProduct, {});

OrderTC.addFields({
  products: {
    type: [ProductTC],
    resolve: async (source: any) => {
      const order: OrderDoc | null = await new Promise((resolve, reject) => {
        Order.findById(source._id, (err, doc) => resolve(doc));
      });

      return new Promise(resolve => {
        Product.find({
          _id: {
            $in: order?.orderedProducts?.map(({ product }) => product) || [],
          },
        }, (err, docs) => resolve(docs.map((product) => {
          const newProduct = product;
          const orderedProduct = order?.orderedProducts.find(({ product: orderedProductId }) => orderedProductId.toString() === product._id.toString());

          newProduct.quantity = orderedProduct?.quantity || 0;

          return newProduct;
        })))
      })
    },
  },
  totalCost: {
    type: 'Float',
    resolve: async (source: any) => {
      const order: OrderDoc | null = await new Promise((resolve, reject) => {
        Order.findById(source._id, (err, doc) => resolve(doc));
      });

      return new Promise(resolve => {
        Product.find({
          _id: {
            $in: order?.orderedProducts?.map(({ product }) => product) || [],
          },
        }, (err, docs) => {
          const totalCost = docs.reduce((cost, product) => {
            const orderedProduct = order?.orderedProducts.find(({ product: orderedProductId }) => orderedProductId.toString() === product._id.toString());
            return cost + product.price * (orderedProduct?.quantity || 0);
          }, 0)

          const delieverCost = totalCost * 0.2;

          resolve(totalCost > 15000 ? totalCost : totalCost + delieverCost); 
        })
      })
    },
  },
  quantity: {
    type: 'Int',
    resolve: async (source: any) => {
      const order: OrderDoc | null = await new Promise((resolve, reject) => {
        Order.findById(source._id, (err, doc) => resolve(doc));
      });

      return new Promise(resolve => {
        Product.find({
          _id: {
            $in: order?.orderedProducts?.map(({ product }) => product) || [],
          },
        }, (err, docs) => {
          const totalQuantity = docs.reduce((quantity, product) => {
            const orderedProduct = order?.orderedProducts.find(({ product: orderedProductId }) => orderedProductId.toString() === product._id.toString());
            return quantity + (orderedProduct?.quantity || 0);
          }, 0)

          resolve(totalQuantity); 
        })
      })
    },
  },
});

export const orderQuery = {
  order: OrderTC.mongooseResolvers.findById(),
  ordersById: OrderTC.mongooseResolvers.findByIds(),
  orders: OrderTC.mongooseResolvers.pagination({ findManyOpts: { filter: { operators: true } }, countOpts: { filter: { operators: true } }}),
};

export const orderMutation = {
  createOrder: OrderTC.mongooseResolvers.createOne(),
  removeOrder: OrderTC.mongooseResolvers.removeById(),
  removeOrders: OrderTC.mongooseResolvers.removeMany({ filter: { operators: true } }),
  updateOrderStatus: {
    type: OrderTC,
    args: { id: 'MongoID!', status: 'EnumOrderStatus!' },
    resolve: async (source: unknown, args: { id: string, status: string }) => (
      await Order.findOneAndUpdate({ _id: args.id }, { status: args.status }, { new: true })
    ),
  }
};
