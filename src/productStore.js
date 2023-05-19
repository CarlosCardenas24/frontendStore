const PRODUCT_ONE = process.env.REACT_APP_PRODUCT_ONE
const PRODUCT_TWO = process.env.REACT_APP_PRODUCT_TWO
const PRODUCT_THREE = process.env.REACT_APP_PRODUCT_THREE

const produce = [
    { id: `${PRODUCT_ONE}`, title: 'product 1', price: 10.99 },
    /* { id: `${PRODUCT_TWO}`, title: 'product 2', price: 9.99 },
    { id: `${PRODUCT_THREE}`, title: 'product 3', price: 15.99 }, */
]
    
function getProductData(num) {
   let productData = produce.find((item) => num === item.id)

   return productData

    /* for (let i = 0; i < produce.length; i++){
        if (num === produce[i].id) {
            return produce[i];
        } else {
            return console.error("Doesn't exist!")
        }
    } */
}

export {produce, getProductData}