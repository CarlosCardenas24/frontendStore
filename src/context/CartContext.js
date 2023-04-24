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
        /* let total = []

        produce.map((product) => {

            if (getProductQuantity(product.id) === 0){
                return null

            } else if (getProductQuantity(product.id) >= 1){
                cart.map((cartQuantity) => {
                    if (product.id === cartQuantity.id) {
                        total.push(product.price * cartQuantity.quantity)
                    }
                })
            }
        })

        const initialValue = 0
        const grandTotal = Math.round(100*total.reduce(
            (accumulator, currentValue) => accumulator + currentValue, initialValue
        ))/100

        console.log(grandTotal) */

        let total = 0
            cart.map((product) => {
                    total += (product.quantity * getProductData(product.id).price)
            })

            console.log(Math.round(100*total)/100)
            return Math.round(100*total)/100
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