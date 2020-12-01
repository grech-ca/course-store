import { useMemo } from 'react';

import useStorage from 'hooks/useStorage';
import useNotification from 'hooks/useNotification';

import { Product, useCartQuery } from 'graphql/generated';

export type CartItem = {
  id: string;
  date: string;
  quantity: number;
};

type Hook = {
  cart: CartItem[];
  findItemInCartById: (id: string) => CartItem | undefined;
  addToCart: (id: string, quantity: number) => void;
  setInCartQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  decreaseFromCart: (id: string, quantity: number) => void;
  products: Product[];
  productsCost: number;
  delieverCost: number;
};

const useCart = (): Hook => {
  const [cart, setCart] = useStorage<CartItem[]>('cart-items', []);

  const { notify } = useNotification();

  const findItemInCartById = (id: string) => cart.find(({ id: productId }: CartItem) => productId === id);

  const addToCart = (id: string, quantity = 1) => {
    const newCart = [...cart] as CartItem[];
    const productIndex = newCart.findIndex(({ id: itemId }: { id: string }) => itemId === id);

    notify({
      title: 'Корзина',
      description: 'Товар успешно добавлен!',
      variant: 'success',
    });

    if (productIndex + 1) {
      newCart.splice(productIndex, productIndex + 1, {
        id: newCart[productIndex].id,
        quantity: newCart[productIndex].quantity + quantity,
        date: new Date().toISOString(),
      });
    } else {
      newCart.push({
        id,
        quantity,
        date: new Date().toISOString(),
      });
    }

    setCart(newCart);
  };

  const setInCartQuantity = (id: string, quantity: number) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex(({ id: itemId }: { id: string }) => itemId === id);

    if (productIndex + 1) {
      newCart.splice(productIndex, productIndex + 1, {
        id: newCart[productIndex].id,
        quantity,
        date: new Date().toISOString(),
      });
    } else {
      newCart.push({
        id,
        quantity,
        date: new Date().toISOString(),
      });
    }

    setCart(newCart);
  };

  const removeFromCart = (id: string) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex(({ id: itemId }: { id: string }) => itemId === id);

    if (productIndex + 1) {
      newCart.splice(productIndex, productIndex + 1);

      setCart(newCart);
    }
  };

  const decreaseFromCart = (id: string, quantity = 1) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex(({ id: itemId }: { id: string }) => itemId === id);

    if (productIndex + 1) {
      newCart.splice(productIndex, productIndex + 1, {
        id: newCart[productIndex].id,
        quantity: newCart[productIndex].quantity + quantity,
        date: new Date().toISOString(),
      });

      if (newCart[productIndex].quantity <= 0) {
        removeFromCart(id);
      } else {
        setCart(newCart);
      }
    }
  };

  const { data } = useCartQuery({
    variables: {
      ids: cart.map(({ id }: { id: string }) => id),
    },
  });
  const { products = [] } = data || {};

  const productsCost = useMemo<number>(
    () =>
      (products as Product[]).reduce((total: number, cur: Product) => {
        const cartItem = cart.find(({ id }: CartItem) => id === cur._id);

        return total + cur.price * (cartItem?.quantity || 0);
      }, 0),
    [cart, products],
  );

  const delieverCost = useMemo<number>(() => {
    const delieverPrice = productsCost * 0.2;

    return productsCost > 15000 ? 0 : delieverPrice;
  }, [productsCost]);

  const clearCart = () => setCart([]);

  return {
    cart,
    findItemInCartById,
    addToCart,
    setInCartQuantity,
    removeFromCart,
    decreaseFromCart,
    clearCart,
    products: products as Product[],
    productsCost,
    delieverCost,
  };
};

export default useCart;
