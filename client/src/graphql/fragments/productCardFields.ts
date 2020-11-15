import { gql } from '@apollo/client';

const productCardFields = gql`
  fragment productCardFields on Product {
    _id
    name
    description
    price
    quantity
    photos
  }
`;

export default productCardFields;
