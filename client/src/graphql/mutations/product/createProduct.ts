import { gql } from '@apollo/client';

const createProduct = gql`
  mutation createProduct($record: CreateOneProductInput!) {
    createProduct(record: $record) {
      record {
        _id
        name
        description
        price
        quantity
        materials {
          name
        }
        photos
      }
    }
  }
`;

export default createProduct;
