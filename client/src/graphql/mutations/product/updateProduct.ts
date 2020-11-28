import { gql } from '@apollo/client';

const updateProduct = gql`
  mutation updateProduct($id: MongoID!, $record: UpdateByIdProductInput!) {
    updateProduct(_id: $id, record: $record) {
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

export default updateProduct;
