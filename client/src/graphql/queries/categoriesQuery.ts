import { gql } from '@apollo/client';

const categoriesQuery = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;

export default categoriesQuery;
