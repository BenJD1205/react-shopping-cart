import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducers';
import cartReducers from './reducers/cartReducers';
import orderReducer from './reducers/orderReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
    combineReducers({
        products: productReducer,
        cart:cartReducers,
        order:orderReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;