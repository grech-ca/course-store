import { gql } from '@apollo/client';

const homeQuery = gql`
  query HomeQuery {
    typeMany(limit: 4) {
      _id
      name
      photo
    }
    productMany(limit: 5) {
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
