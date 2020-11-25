import { composeMongoose } from 'graphql-compose-mongoose';

import mongoose from 'mongoose';
import _ from 'lodash';

import { singlePhotoResolver } from '../helpers/photoResolver';

import { ProductTC } from './ProductTC';

export interface CategoryDoc extends mongoose.Document {
  name: string;
  productRefs: string[];
} 

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: String,
}, {
  timestamps: true,
});

const Category = mongoose.model<CategoryDoc>('Type', CategorySchema);

CategorySchema.index({ createdAt: 1 });
CategorySchema.index({ updatedAt: 1 });

export const CategoryTC = composeMongoose(Category, {});

CategoryTC.addRelation(
  'products',
  {
    resolver: () => ProductTC.mongooseResolvers.findMany(),
    args: {
      filter: (source: any) => ({
        categoryRef: source._id
      }),
    },
    projection: { productRefs: true },
  } as any
);

export const categoryQuery = {
  category: CategoryTC.mongooseResolvers.findById(),
  categoriesById: CategoryTC.mongooseResolvers.findByIds(),
  categories: CategoryTC.mongooseResolvers.findMany({ filter: { operators: true } }),
  aggregateCategory: CategoryTC.mongooseResolvers.count({ filter: { operators: true } }),
};

export const categoryMutation = {
  ...singlePhotoResolver({
    createCategory: CategoryTC.mongooseResolvers.createOne(),
    updateCategory: CategoryTC.mongooseResolvers.updateById(),
    updateCategories: CategoryTC.mongooseResolvers.updateMany({ filter: { operators: true } }),
  }),
  removeCategory: CategoryTC.mongooseResolvers.removeById(),
  removeCategories: CategoryTC.mongooseResolvers.removeMany({ filter: { operators: true } }),
};
