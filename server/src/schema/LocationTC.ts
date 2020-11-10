import { composeMongoose } from 'graphql-compose-mongoose';

import mongoose from 'mongoose';
import _ from 'lodash';

import { ProductTC } from './ProductTC';

import { singlePhotoResolver } from '../helpers/photoResolver';

export interface LocationDoc extends mongoose.Document {
  name: string;
  productRefs: string[];
} 

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: String,
}, {
  timestamps: true,
});

LocationSchema.index({ createdAt: 1, updatedAt: 1 });

const Location = mongoose.model<LocationDoc>('Location', LocationSchema);

export const LocationTC = composeMongoose(Location, {});

LocationTC.addRelation(
  'products',
  {
    resolver: () => ProductTC.mongooseResolvers.findMany(),
    args: {
      filter: (source: any) => ({
        locationRef: source._id
      }),
    },
    projection: { productRefs: true },
  } as any
);

export const locationQuery = {
  locationById: LocationTC.mongooseResolvers.findById(),
  locationByIds: LocationTC.mongooseResolvers.findByIds(),
  locationOne: LocationTC.mongooseResolvers.findOne(),
  locationMany: LocationTC.mongooseResolvers.findMany({ filter: { operators: true } }),
  locationCount: LocationTC.mongooseResolvers.count({ filter: { operators: true } }),
  locationConnection: LocationTC.mongooseResolvers.connection(),
  locationPagination: LocationTC.mongooseResolvers.pagination(),
};

export const locationMutation = {
  ...singlePhotoResolver({
    locationCreateOne: LocationTC.mongooseResolvers.createOne(),
    locationCreateMany: LocationTC.mongooseResolvers.createMany(),
    locationUpdateById: LocationTC.mongooseResolvers.updateById(),
    locationUpdateOne: LocationTC.mongooseResolvers.updateOne(),
    locationUpdateMany: LocationTC.mongooseResolvers.updateMany({ filter: { operators: true } }),
  }),
  locationRemoveById: LocationTC.mongooseResolvers.removeById(),
  locationRemoveOne: LocationTC.mongooseResolvers.removeOne(),
  locationRemoveMany: LocationTC.mongooseResolvers.removeMany({ filter: { operators: true } }),
};
