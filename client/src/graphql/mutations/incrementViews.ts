import { gql } from '@apollo/client';

const incrementViews = gql`
  mutation incrementViews($id: MongoID!) {
    incrementProductViews(id: $id) {
      _id
      name
      views
    }
  }
`;

export default incrementViews;
