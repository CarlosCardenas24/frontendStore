import React, { createContext, useState, useEffect } from "react";
import ProductCard from "../Card";
import { produce, getProductData } from "../productStore";

const CartContext = createContext({
    cart: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    checkCart: () => {},
    /* removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {} */
})

export const CartContextProvider = ({children}) => {
    // items = shopping cart
    const [cart, setCart] = useState([/* {id: 1, quantity: 2} */])
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

    const checkCart = () => {
        console.log(cart)
    }

        /*
        implement the getProductQuantity function here
        check the quantity of the id passed
        if the quantity is undefined then return 0 from the function, else return quantity
        adding one to the cart
        */

        /*
        use the map high order function rather then the find 
        look for a matching id, implement 
        the high order function
        in the setCart method
        example setCart(items.map(product =>conditional logic here))
        */

        /*
        hint map returns an array which can become you're new 
        shopping cart if there is and id match increment the
        quantity else just return the product
        */

    return <CartContext.Provider value={{
        cart,
        getProductQuantity,
        addOneToCart,
        checkCart,
        /* removeOneFromCart,
        deleteFromCart,
        getTotalCost */
    }}>
        {children}
    </CartContext.Provider>
}

export default CartContext