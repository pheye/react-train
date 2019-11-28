import { createActions, handleActions } from "redux-actions";
import { getProduct } from "./products";


export const { addToCart } = createActions({
    ADD_TO_CART: (id) =>({id})
})

const addedIds = (state, {payload: {id}}) => {

    if (state.indexOf(id) !== -1) {
        return state;
    }
    return [...state, id]
}

const quantityById = (state, {payload: {id}}) => {
    return {
        ...state, 
        [id]: (state[id] || 0) + 1
    }
}

const reducer = handleActions({
    [addToCart]: (state, action) => ({
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
    })
}, {
    addedIds: [],
    quantityById: {}    
})

export const add = (id) => (dispatch, getState) => {
    if (getState().products.byId[id].inventory > 0) {
        dispatch(addToCart(id))
    }
}

export const getCartProducts = (state) => 
    state.cart.addedIds.map(id => ({
        ...getProduct(state.products, id),
        quantity: state.cart.quantityById[id]
    }))

export default reducer;