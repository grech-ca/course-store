import { gql } from '@apollo/client';

import productCardFields from 'graphql/fragments/productCardFields';

const productByIdQuery = gql`
  query productByIdQuery($id: MongoID!, $admin: Boolean!) {
    productById(_id: $id) {
      _id
      photos
      name
      description
      price
      quantity
      type {
        _id
        name
      }
      locations {
        _id
        name
      }
      materials {
        _id
        name
        type
      }
    }
    materialMany @skip(if: $admin) {
      _id
      name
    }
    recommended: productMany(limit: 5) {
      ...productCardFields
    }
  }
  ${productCardFields}
`;

export default productByIdQuery;
