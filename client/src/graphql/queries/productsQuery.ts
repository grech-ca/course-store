import { gql } from '@apollo/client';

const ProductsQuery = gql`
  query ProductsQuery {
    productMany {
      _id
      name
      description
      price
      quantity
      photos
    }
  }
`;

export default ProductsQuery;
