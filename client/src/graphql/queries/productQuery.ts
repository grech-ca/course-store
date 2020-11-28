import { gql } from '@apollo/client';

import productCardFields from 'graphql/fragments/productCardFields';

const productQuery = gql`
  query product($id: MongoID!, $admin: Boolean!) {
    product(_id: $id) {
      _id
      photos
      name
      description
      price
      quantity
      categoryRef
      materialRefs
      locationRefs
      category {
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
    materials @skip(if: $admin) {
      _id
      name
    }
    recommended: products(limit: 5) {
      ...productCardFields
    }
  }
  ${productCardFields}
`;

export default productQuery;
