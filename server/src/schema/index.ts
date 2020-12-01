import { schemaComposer } from 'graphql-compose';

import { GraphQLUpload } from 'apollo-server';

import { productMutation, productQuery } from './ProductTC';
import { materialMutation, materialQuery } from './MaterialTC';
import { categoryMutation, categoryQuery } from './CategoryTC';
import { locationMutation, locationQuery } from './LocationTC';
import { orderMutation, orderQuery } from './OrderTC';
import { authQuery } from './AuthTC';


schemaComposer.add(GraphQLUpload);

schemaComposer.Query.addFields({
  ...productQuery, ...materialQuery, ...categoryQuery, ...locationQuery, ...authQuery, ...orderQuery,
});

schemaComposer.Mutation.addFields({
  ...productMutation, ...materialMutation, ...categoryMutation, ...locationMutation, ...orderMutation,
});

const graphqlSchema = schemaComposer.buildSchema();

export default graphqlSchema;
