import { gql } from '@apollo/client';

const RecentlyModifiedQuery = gql`
  query RecentlyModified($date: Date!) {
    products(filter: { _operators: { updatedAt: { gte: $date } } }, sort: UPDATEDAT_DESC) {
      _id
      name
      photos
      updatedAt
    }
    materials(filter: { _operators: { updatedAt: { gte: $date } } }, sort: UPDATEDAT_DESC) {
      _id
      name
      updatedAt
    }
    categories(filter: { _operators: { updatedAt: { gte: $date } } }, sort: UPDATEDAT_DESC) {
      _id
      name
      photo
      updatedAt
    }
    locations(filter: { _operators: { updatedAt: { gte: $date } } }, sort: UPDATEDAT_DESC) {
      _id
      name
      photo
      updatedAt
    }
  }
`;

export default RecentlyModifiedQuery;
