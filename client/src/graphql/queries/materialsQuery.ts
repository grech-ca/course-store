import { gql } from '@apollo/client';

const materialsQuery = gql`
  query materials {
    materials {
      _id
      name
    }
  }
`;

export default materialsQuery;
