import shop from "../api/shop";

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));

export default {
  namespace: "products",
  state: {
    byId: {},
    visibleIds: []
  },
  effects: {
    *get(action, { call, put }) {
      const res = yield call(shop.getProducts);
      yield put({
        type: "setProducts",
        payload: res
      });
    }
  },
  reducers: {
    setProducts: (state, { payload: { data } }) => {
      return {
        ...state,
        byId: data.reduce((obj, item) => {
          obj[item.id] = item;
          return obj;
        }, {}),
        visibleIds: data.map(item => item.id)
      };
    },
    addToCart: (state, { payload: { id } }) => {
      const selected = state[id];
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: { ...selected, inventory: selected.inventory - 1 }
        }
      };
    }
  }
};
