import { gql } from '@apollo/client';

const ordersQuery = gql`
  query orders($page: Int, $perPage: Int = 20, $filter: FilterFindManyOrderInput, $sort: SortFindManyOrderInput) {
    orders(page: $page, perPage: $perPage, filter: $filter, sort: $sort) {
      items {
        _id
        name
        lastName
        adress
        phone
        status
        totalCost
        quantity
        createdAt
        updatedAt
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`;

export default ordersQuery;
