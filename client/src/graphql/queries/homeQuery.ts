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
    locations: locationMany {
      _id
      name
    }
    categories: typeMany {
      _id
      name
    }
  }
`;

export default homeQuery;
