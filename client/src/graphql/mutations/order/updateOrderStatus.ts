import { gql } from '@apollo/client';

const updateOrderStatus = gql`
  mutation updateOrderStatus($id: MongoID!, $status: EnumOrderStatus!) {
    updateOrderStatus(id: $id, status: $status) {
      status
      updatedAt
    }
  }
`;

export default updateOrderStatus;
