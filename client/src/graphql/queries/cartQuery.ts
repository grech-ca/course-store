import { gql } from '@apollo/client';

const cartQuery = gql`
  query cart($ids: [MongoID!]!) {
    products: productsById(_ids: $ids) {
      _id
      name
      description
      photos
      price
      category {
        name
      }
      quantity
    }
  }
`;

export default cartQuery;
