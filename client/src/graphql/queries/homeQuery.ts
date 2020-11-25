import { gql } from '@apollo/client';

const homeQuery = gql`
  query Home {
    categories(limit: 5) {
      _id
      name
      photo
    }
    products(limit: 10) {
      _id
      name
      photos
      description
      price
      quantity
    }
  }
`;

export default homeQuery;
