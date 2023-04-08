import React, { createContext, useState } from "react";
import { produce, getProductData } from "../productStore";

const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export const CartContextProvider = () => {
    const [items, setItems] = useState([])

    // adding one to the cart


    return <CartContext.Provider value={{
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }}></CartContext.Provider>
}