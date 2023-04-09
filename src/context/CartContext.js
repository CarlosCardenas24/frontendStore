import React, { createContext, useState, useEffect } from "react";
import { produce, getProductData } from "../productStore";

const CartContext = createContext({
    /* items: [], */
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export const CartContextProvider = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = () => {
        setItems(getProductData, )
    }

    // adding one to the cart
    const addOneToCart = () => {
        setItems()
        console.log(items)
    }



    return <CartContext.Provider value={{
        /* getProductQuantity, */
        addOneToCart,
        /* removeOneFromCart,
        deleteFromCart,
        getTotalCost */
    }}></CartContext.Provider>
}

export default CartContext