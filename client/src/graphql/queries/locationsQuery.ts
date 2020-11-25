import { gql } from '@apollo/client';

const locationsQuery = gql`
  query locations {
    locations {
      _id
      name
    }
  }
`;

export default locationsQuery;
