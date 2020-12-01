import { gql } from '@apollo/client';

const createOrder = gql`
  mutation createOrder($record: CreateOneOrderInput!) {
    createOrder(record: $record) {
      record {
        _id
        name
        lastName
        adress
        phone
        products {
          name
        }
      }
    }
  }
`;

export default createOrder;
