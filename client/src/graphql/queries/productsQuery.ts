import { gql } from '@apollo/client';

import productCardFields from 'graphql/fragments/productCardFields';

const ProductsQuery = gql`
  query Products(
    $filter: FilterFindManyProductInput
    $page: Int = 1
    $perPage: Int = 10
    $sort: SortFindManyProductInput
  ) {
    productsPagination(filter: $filter, page: $page, perPage: $perPage, sort: $sort) {
      items {
        ...productCardFields
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
  ${productCardFields}
`;

export default ProductsQuery;
