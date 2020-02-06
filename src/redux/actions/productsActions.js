const PRODUCTS_URL = 'http://localhost:3000/products'
const PRODUCT_URL = product_id =>  PRODUCTS_URL + '/' + product_id


const getProductsAction = products => ({
    type: 'GET_PRODUCTS',
    payload: products
})


const getProducts = () => dispatch => {
    fetch(PRODUCTS_URL)
    .then(r => r.json())
    .then(products => {
        dispatch(getProductsAction(products))
    })
}


export default {
    getProducts
}