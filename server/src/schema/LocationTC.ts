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

LocationSchema.index({ createdAt: 1 });
LocationSchema.index({ updatedAt: 1 });

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
  location: LocationTC.mongooseResolvers.findById(),
  locationsById: LocationTC.mongooseResolvers.findByIds(),
  locations: LocationTC.mongooseResolvers.findMany({ filter: { operators: true } }),
  aggregateLocation: LocationTC.mongooseResolvers.count({ filter: { operators: true } }),
};

export const locationMutation = {
  ...singlePhotoResolver({
    createLocation: LocationTC.mongooseResolvers.createOne(),
    updateLocation: LocationTC.mongooseResolvers.updateById(),
    updateLocations: LocationTC.mongooseResolvers.updateMany({ filter: { operators: true } }),
  }),
  removeLocation: LocationTC.mongooseResolvers.removeById(),
  removeLocations: LocationTC.mongooseResolvers.removeMany({ filter: { operators: true } }),
};
