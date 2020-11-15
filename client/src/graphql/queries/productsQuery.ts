import { gql } from '@apollo/client';

import productCardFields from 'graphql/fragments/productCardFields';

const ProductsQuery = gql`
  query ProductsQuery {
    productMany {
      ...productCardFields
    }
  }
  ${productCardFields}
`;

export default ProductsQuery;
