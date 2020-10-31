import { composeMongoose } from 'graphql-compose-mongoose';

import mongoose from 'mongoose';

import 'dotenv';

import { MaterialTC } from './MaterialTC';
import { TypeTC } from './TypeTC';
import { LocationTC } from './LocationTC';

import { multiplePhotoResolver } from '../helpers/photoResolver';

export interface ProductDoc extends mongoose.Document {
  name: string;
  description: string;
  typeRefs: string[];
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
  typeRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
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
  }
}, {
  timestamps: true
});

const Product = mongoose.model<ProductDoc>('Product', ProductSchema);

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
  'type',
  {
    resolver: () => TypeTC.mongooseResolvers.findById(),
    args: {
      filter: (source: any) => ({
        _id: source.typeRef
      })
    },
    projection: { typeRef: true },
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

ProductTC.removeField(['typeRef', 'materialRefs', 'locationRefs']);

export const productQuery = {
  productById: ProductTC.mongooseResolvers.findById(),
  productByIds: ProductTC.mongooseResolvers.findByIds(),
  productOne: ProductTC.mongooseResolvers.findOne(),
  productMany: ProductTC.mongooseResolvers.findMany({ filter: { operators: true } }),
  productCount: ProductTC.mongooseResolvers.count({ filter: { operators: true } }),
  productConnection: ProductTC.mongooseResolvers.connection(),
  productPagination: ProductTC.mongooseResolvers.pagination(),
};

export const productMutation = {
  ...multiplePhotoResolver({
    productCreateOne: ProductTC.mongooseResolvers.createOne(),
    productCreateMany: ProductTC.mongooseResolvers.createMany(),
    productUpdateById: ProductTC.mongooseResolvers.updateById(),
    productUpdateOne: ProductTC.mongooseResolvers.updateOne(),
    productUpdateMany: ProductTC.mongooseResolvers.updateMany({ filter: { operators: true } }),
  }),
  productRemoveById: ProductTC.mongooseResolvers.removeById(),
  productRemoveOne: ProductTC.mongooseResolvers.removeOne(),
  productRemoveMany: ProductTC.mongooseResolvers.removeMany({ filter: { operators: true } }),
};
