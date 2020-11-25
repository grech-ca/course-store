import { useContext } from 'react';

import { ProductsContext } from 'components/product/Products';

const useProductsContext = () => {
  const context = useContext(ProductsContext);

  return context;
};

export default useProductsContext;
