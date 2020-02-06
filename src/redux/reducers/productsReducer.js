const initialState = {
 products: [],
 product: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_PRODUCTS':
        return { 
            ...state, 
            products: payload 
        }

    default:
        return state
    }
}
