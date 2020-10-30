import { composeMongoose } from 'graphql-compose-mongoose';

import mongoose from 'mongoose';
import _ from 'lodash';

import { ProductTC } from './ProductTC';

export interface MaterialDoc extends mongoose.Document {
  name: string;
  productRefs: string[];
}

const MaterialSchema = new mongoose.Schema({
  type: {
    type: String,
    // GraphQL doesn't allow cyrillic enum...
    enum: ['wood', 'metal', 'plastic', 'glass', 'ceramic', 'fabric', 'stone'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const Material = mongoose.model<MaterialDoc>('Material', MaterialSchema);

export const MaterialTC = composeMongoose(Material, {});

MaterialTC.addRelation(
  'products',
  {
    resolver: () => ProductTC.mongooseResolvers.findMany(),
    args: {
      filter: (source: any) => ({
        materialRefs: [source._id]
      })
    },
    projection: { productRefs: true },
  } as any
);

export const materialQuery = {
  materialById: MaterialTC.mongooseResolvers.findById(),
  materialByIds: MaterialTC.mongooseResolvers.findByIds(),
  materialOne: MaterialTC.mongooseResolvers.findOne(),
  materialMany: MaterialTC.mongooseResolvers.findMany(),
  materialCount: MaterialTC.mongooseResolvers.count(),
  materialConnection: MaterialTC.mongooseResolvers.connection(),
  materialPagination: MaterialTC.mongooseResolvers.pagination(),
};

export const materialMutation = {
  materialCreateOne: MaterialTC.mongooseResolvers.createOne(),
  materialCreateMany: MaterialTC.mongooseResolvers.createMany(),
  materialUpdateById: MaterialTC.mongooseResolvers.updateById(),
  materialUpdateOne: MaterialTC.mongooseResolvers.updateOne(),
  materialUpdateMany: MaterialTC.mongooseResolvers.updateMany(),
  materialRemoveById: MaterialTC.mongooseResolvers.removeById(),
  materialRemoveOne: MaterialTC.mongooseResolvers.removeOne(),
  materialRemoveMany: MaterialTC.mongooseResolvers.removeMany(),
};
