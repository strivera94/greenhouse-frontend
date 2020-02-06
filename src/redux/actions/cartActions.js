const CART_URL = 'http://localhost:3000/carts'
const PI_URL = 'http://localhost:3000/product_instances'

const newCartAction = cart => ({
    type: 'NEW_CART',
    payload: cart
})

const addToCartAction = item => ({
    type: 'ADD_TO_CART',
    payload: item
})


//Action Creators
const newCart = (user) => dispatch => {
    console.log('before fetch')
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user
        })
    }
    fetch(CART_URL, config)
    .then(r => r.json())
    .then(cart => dispatch(newCartAction(cart)))
}
// Create cart, patch currentUser.currentCart, add the cart to state
const addToCart = (cart, product) => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart_id: cart.id,
            product_id: product.id
        })
    }
    fetch(PI_URL, config)
    .then(r => r.json())
    .then(item => dispatch(addToCartAction(item))
    )
}