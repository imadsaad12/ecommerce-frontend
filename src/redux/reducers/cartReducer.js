import { ADD_TO_CART, UPDATE_CART } from "../actions";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.payload] };
    case UPDATE_CART:
      return { products: action.payload };
    case "ERROR_TASK":
      return { ...state, isRunning: false, error: action.payload };
    default:
      return state;
  }
};
