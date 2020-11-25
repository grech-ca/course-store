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

MaterialSchema.index({ createdAt: 1 });
MaterialSchema.index({ updatedAt: 1 });

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
  material: MaterialTC.mongooseResolvers.findById(),
  materialsById: MaterialTC.mongooseResolvers.findByIds(),
  materials: MaterialTC.mongooseResolvers.findMany({ filter: { operators: true } }),
  aggregateMaterial: MaterialTC.mongooseResolvers.count({ filter: { operators: true } }),
};

export const materialMutation = {
  createMaterial: MaterialTC.mongooseResolvers.createOne(),
  updateMaterial: MaterialTC.mongooseResolvers.updateById(),
  updateMaterials: MaterialTC.mongooseResolvers.updateMany({ filter: { operators: true } }),
  removeMaterial: MaterialTC.mongooseResolvers.removeById(),
  removeMaterials: MaterialTC.mongooseResolvers.removeMany({ filter: { operators: true } }),
};
