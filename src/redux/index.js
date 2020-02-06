import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/authReducer'
import productsReducer from './reducers/productsReducer'
import cart from './reducers/cartReducer'

const rootReducer = combineReducers({
    currentUser: currentUser,
    productsReducer: productsReducer,
    cart: cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))