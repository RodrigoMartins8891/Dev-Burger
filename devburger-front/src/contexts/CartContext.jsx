import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addProduct(product) {
        const productExists = cart.find(item => item.id === product.id);

        const normalizedValue = typeof product.valor === 'string'
            ? Number(product.valor.replace(',', '.'))
            : Number(product.valor);

        if (productExists) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, valor: normalizedValue, quantidade: 1 }]);
        }
    }



    function removeProduct(productId) {
        setCart(cart.filter(item => item.id !== productId));
    }

    function increaseQuantity(productId) {
        setCart(
            cart.map(item =>
                item.id === productId
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            )
        );
    }

    function decreaseQuantity(productId) {
        setCart(
            cart
                .map(item =>
                    item.id === productId
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                .filter(item => item.quantidade > 0)
        );
    }


    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                removeProduct,
                increaseQuantity,
                decreaseQuantity,
                clearCart
            }}
        >

            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}


