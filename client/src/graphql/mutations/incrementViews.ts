import { gql } from '@apollo/client';

const incrementViews = gql`
  mutation incrementViews($id: MongoID!) {
    productIncrementViews(id: $id) {
      _id
      name
      views
    }
  }
`;

export default incrementViews;
