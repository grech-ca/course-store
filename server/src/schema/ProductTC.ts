import { composeMongoose } from 'graphql-compose-mongoose';

import mongoose from 'mongoose';

import 'dotenv';

import { MaterialTC } from './MaterialTC';
import { CategoryTC } from './CategoryTC';
import { LocationTC } from './LocationTC';

import { multiplePhotoResolver } from '../helpers/photoResolver';

export interface ProductDoc extends mongoose.Document {
  name: string;
  description: string;
  categoryRefs: string[];
  locations: string[];
  materialRefs: string[];
  price: number;
  quantity: number;
  photos: string[];
}

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: "",
  },
  locationRefs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Location',
    default: [],
  },
  materialRefs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Material',
    default: [],
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true,
    default: 0,
  },
  quantity: {
    type: mongoose.Schema.Types.Number,
    required: true,
    default: 0,
  },
  photos: {
    type: [String],
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true
});

ProductSchema.index({ createdAt: 1 });
ProductSchema.index({ updatedAt: 1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ quantity: 1 });

export const Product = mongoose.model<ProductDoc>('Product', ProductSchema);

export const ProductTC = composeMongoose(Product, {});

ProductTC.addRelation(
  'materials',
  {
    resolver: () => MaterialTC.mongooseResolvers.findMany(),
    args: {
      filter: (source: any) => ({
        _operators: {
          _id: {
            in: source.materialRefs || []
          }
        }
      })
    },
    projection: { materialRefs: true },
  } as any
);

ProductTC.addRelation(
  'category',
  {
    resolver: () => CategoryTC.mongooseResolvers.findById(),
    prepareArgs: {
      _id: (source: any) => source.categoryRef,
    },
    projection: { categoryRef: true },
  } as any
);

ProductTC.addRelation(
  'locations',
  {
    resolver: () => LocationTC.mongooseResolvers.findMany(),
    args: {
      filter: (source: any) => ({
        _operators: {
          _id: {
            in: source.locationRefs || []
          }
        }
      })
    },
    projection: { locationRefs: true },
  } as any
);

export const productQuery = {
  product: ProductTC.mongooseResolvers.findById(),
  productsById: ProductTC.mongooseResolvers.findByIds(),
  products: ProductTC.mongooseResolvers.findMany({ filter: { operators: true }, sort: { multi: true } }),
  productsPagination: ProductTC.mongooseResolvers.pagination({ findManyOpts: { filter: { operators: true } }, countOpts: { filter: { operators: true } }}),
};

export const productMutation = {
  ...multiplePhotoResolver({
    createProduct: ProductTC.mongooseResolvers.createOne(),
    updateProduct: ProductTC.mongooseResolvers.updateById(),
    updateProducts: ProductTC.mongooseResolvers.updateMany({ filter: { operators: true } }),
  }),
  removeProduct: ProductTC.mongooseResolvers.removeById(),
  removeProducts: ProductTC.mongooseResolvers.removeMany({ filter: { operators: true } }),
  incrementProductViews: {
    type: ProductTC,
    args: { id: 'MongoID!' },
    resolve: async (source: unknown, args: { id: string }) => await Product.findOneAndUpdate({ _id: args.id }, { $inc : { views : 1 } }, { new: true }),
  }
};
