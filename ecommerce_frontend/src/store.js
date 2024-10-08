import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsListReducers, productDetailsReducers } from './reducers/productsReducers';
import { userLoginReducers, userSignUpReducers } from './reducers/userReducers';

const reducer = combineReducers({
    productsList: productsListReducers,
    productDetails: productDetailsReducers,
    userLogin: userLoginReducers,
    userSignup: userSignUpReducers
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;