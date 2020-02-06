const initialState = {
    currentCart: {},
    cartItems: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'NEW_CART':
        return {...state,
            currentCart: payload
        }

    case 'ADD_TO_CART':
        return { ...state, 
            cartItems: [...state.cartItems, payload]
        }

    default:
        return state
    }
}
