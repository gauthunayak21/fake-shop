import fakeApiStore from '../../apis/fakeApiStore';
import { ACTION_TYPES } from '../constants/action-types';


export const fetchProducts = () => async (dispatch) => {
    const response = await fakeApiStore.get('/products');
    dispatch({
        type: ACTION_TYPES.FETCH_PRODUCTS,
        products: response.data
    })
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeApiStore.get(`/products/${id}`);
    dispatch({
        type: ACTION_TYPES.SELECTED_PRODUCT,
        product: response.data
    })
}

export const setProducts = (products) => {
    return {
        type: ACTION_TYPES.SET_PRODUCTS,
        products: products
    }
}

export const setSelectedProducts = (product) => {
    return {
        type: ACTION_TYPES.SELECTED_PRODUCT,
        product: product
    }
}

export const removeSelectedProducts = () => {
    return {
        type: ACTION_TYPES.REMOVE_SELECTED_PRODUCT,
        product: {}
    }
}