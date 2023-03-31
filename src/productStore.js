const produce = [
    { id: 1, title: 'product 1', price: 10.99 },
    { id: 2, title: 'product 2', price: 9.99 },
    { id: 3, title: 'product 3', price: 15.99 },
    { id: 4, title: 'product 4', price: 19.99 },
]
    
function getProductData(num) {
    for (let i = 0; i < produce.length; i++){
        if (num === produce[i].id) {
            return produce[i].title;
        } else {
            return console.error("Doesn't exist!")
        }
    }
}

export {produce, getProductData}