import { ADD_PRODUCTS } from "../actions";

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
