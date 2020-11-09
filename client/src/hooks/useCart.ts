import useStorage from 'hooks/useStorage';

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
  decreaseFromCart: (id: string, quantity: number) => void;
};

const useCart = (): Hook => {
  const [cart, setCart] = useStorage<CartItem[]>('cart-items', []);

  const findItemInCartById = (id: string) => cart.find(({ id: productId }: CartItem) => productId === id);

  const addToCart = (id: string, quantity = 1) => {
    const newCart = [...cart] as CartItem[];
    const productIndex = newCart.findIndex(({ id: itemId }: { id: string }) => itemId === id);

    if (productIndex + 1) {
      newCart.splice(productIndex, productIndex + 1, {
        id: newCart[productIndex].id,
        quantity: newCart[productIndex].quantity + quantity,
        date: new Date().toISOString(),
      });
    } else {
      newCart.push({
        id,
        quantity: 1,
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

  return {
    cart,
    findItemInCartById,
    addToCart,
    setInCartQuantity,
    removeFromCart,
    decreaseFromCart,
  };
};

export default useCart;
