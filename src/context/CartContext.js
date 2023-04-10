import React, { createContext, useState } from "react";
import ProductCard from "../Card";
import { produce, getProductData } from "../productStore";

const CartContext = createContext({
    items: [],
    /* getProductQuantity: () => {}, */
    addOneToCart: () => {},
    /* removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {} */
})

export const CartContextProvider = ({children}) => {
    // items = shopping cart
    const [items, setItems] = useState([])
    let quantity = 0;

    const getProductQuantity = (id) => {
        const quantity = items.find(product => product.id === id )?.quantity

    }
    // if the quantity is undefined then return 0 from the function, else return quantity

    // adding one to the cart
    const addOneToCart = (id) => {
        // if the product exists then just increase quantity, if it doesn't then add it with a quantity of one
    }

    /* setItems([{id, quantity: 1}, ...items]) */
    /* setItems([{id, quantity: quantity + 1}, ...items]) */

    return <CartContext.Provider value={{
        quantity,
        /* items, */
        /* getProductQuantity, */
        addOneToCart,
        /* removeOneFromCart,
        deleteFromCart,
        getTotalCost */
    }}>
        {children}
    </CartContext.Provider>
}

export default CartContext