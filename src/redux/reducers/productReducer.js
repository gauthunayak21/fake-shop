import { ACTION_TYPES } from '../constants/action-types';


const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SET_PRODUCTS: return {...state, products: action.products}
        case ACTION_TYPES.FETCH_PRODUCTS: return {...state, products: action.products}
        default: return state
    }
}

export const selectedProductReducer = (state = {}, action) => {
    switch(action.type) {
        case ACTION_TYPES.SELECTED_PRODUCT : return {...state, product: action.product}
        case ACTION_TYPES.REMOVE_SELECTED_PRODUCT : return {}
        default : return state
    }
}