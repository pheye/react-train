import { createActions, handleActions, combineActions } from 'redux-actions';
import shop from '../api';

const defaultState = {
    items: [],
    loading: false
};

const { getAllProducts, setProducts } = createActions({
    GET_ALL_PRODUCTS: () => async (dispatch) => {
        const res = await shop.getAllProducts();
        dispatch(setProducts(res.data));
    },
    SET_PRODUCTS: (items) => ({items})
})

