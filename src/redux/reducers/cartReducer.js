import { ADD_TO_CART, RESET_CART, UPDATE_CART } from "../actions";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products:
          state?.products.length > 0
            ? [...state.products, action.payload]
            : [action.payload],
      };
    case UPDATE_CART:
      return { products: action.payload };
    case RESET_CART:
      return {};
    default:
      return state;
  }
};
