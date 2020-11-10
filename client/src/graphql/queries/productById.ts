import { gql } from '@apollo/client';

const productByIdQuery = gql`
  query productByIdQuery($id: MongoID!) {
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
      }
    }
    materialMany {
      _id
      name
    }
  }
`;

export default productByIdQuery;
