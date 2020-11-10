import { gql } from '@apollo/client';

const filter = `
  {
    _operators: {
      updatedAt: {
        gte: $date
      }
    },
  }
`;

const sort = `
  CREATEDAT__UPDATEDAT_DESC
`;

const RecentlyModifiedQuery = gql`
  query RecentlyModifiedQuery ($date: Date!) {
    productMany (filter: ${filter}, sort: ${sort}) {
      _id
      name
      photos
      updatedAt
    }
    materialMany (filter: ${filter}, sort: ${sort}) {
      _id
      name
      updatedAt
    }
    typeMany (filter: ${filter}, sort: ${sort}) {
      _id
      name
      photo
      updatedAt
    }
    locationMany (filter: ${filter}, sort: ${sort}) {
      _id
      name
      photo
      updatedAt
    }
  }
`;

export default RecentlyModifiedQuery;
