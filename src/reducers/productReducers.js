import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_SIZE} from '../types';

const productReducer = (state = {}, action) =>{
    switch(action.type){
        case FILTER_PRODUCTS_BY_SIZE:
            return{
                ...state,
                size:action.payload.size,
                filteredItems:action.payload.items
            }
        case ORDER_PRODUCTS_BY_SIZE:
            return{
                ...state,
                sort:action.payload.size,
                filteredItems:action.payload.items
            }
        case FETCH_PRODUCTS:
            return {items:action.payload, filteredItems:action.payload};
        default:
            return state;
    }
}

export default productReducer;