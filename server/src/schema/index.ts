import { schemaComposer } from 'graphql-compose';

import { GraphQLUpload } from 'apollo-server';

import { productMutation, productQuery } from './ProductTC';
import { materialMutation, materialQuery } from './MaterialTC';
import { typeMutation, typeQuery } from './TypeTC';
import { locationMutation, locationQuery } from './LocationTC';


schemaComposer.add(GraphQLUpload);

schemaComposer.Query.addFields({
  ...productQuery, ...materialQuery, ...typeQuery, ...locationQuery,
});

schemaComposer.Mutation.addFields({
  ...productMutation, ...materialMutation, ...typeMutation, ...locationMutation,
});

const graphqlSchema = schemaComposer.buildSchema();

export default graphqlSchema;
