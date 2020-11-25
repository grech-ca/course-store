import React, { FC } from 'react';

import Layout from 'components/layout/Layout';
import Products from 'components/product/Products';

const ProductPage: FC = () => (
  <Layout header sidebar>
    <Products cart baseUrl="/product" />
  </Layout>
);

export default ProductPage;
