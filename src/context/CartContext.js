import React, { createContext, useState, useEffect } from "react";
import ProductCard from "../Card";
import { produce, getProductData } from "../productStore";

const CartContext = createContext({
    cart: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    checkCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export const CartContextProvider = ({children}) => {
    // items = shopping cart
    const [cart, setCart] = useState([])
    let quantity = 0;




    const getProductQuantity = (id) => {
        quantity = cart.find(item => item.id === id )?.quantity

        if (quantity === undefined || quantity < 0) {
            return  quantity = 0;
        } else {
            return quantity;
        }
    }
    // if the quantity is undefined then return 0 from the function, else return quantity

    // adding one to the cart
    const addOneToCart = (id) => {

        if (getProductQuantity(id) === 0){
            setCart([{id, quantity: 1}, ...cart])

        } else if (getProductQuantity(id) >= 1) {
            setCart(cart.map((product) => {
                    if (product.id === id) {
                        product.quantity++
                    }
                    return product
            }))
        }
    }

    const removeOneFromCart = (id) => {
        if (getProductQuantity(id) === 0){
            return null   
        } else if (getProductQuantity(id) === 1) {
            setCart(cart.filter((product) => product.id !== id))
        } else if (getProductQuantity(id) > 1) {
            setCart(cart.map((product) => {
                if (product.id === id) {
                    product.quantity--
                }
                return product
        }))
        }
    }

    const deleteFromCart = (id) => {
        if (getProductQuantity(id) === 0){
            return null   
        } else if (getProductQuantity(id) >= 1) {
            setCart(cart.filter((product) => product.id !== id))
        }
    }

    const getTotalCost = () => {
        
    }

    const checkCart = () => {
        console.log(cart)
    }

    return <CartContext.Provider value={{
        cart,
        getProductQuantity,
        addOneToCart,
        checkCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }}>
        {children}
    </CartContext.Provider>
}

export default CartContext