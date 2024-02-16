import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART } from "../actions";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const updateCart = (payload) => ({
  type: UPDATE_CART,
  payload,
});

export const deleteFromCart = (error) => ({
  type: DELETE_FROM_CART,
  payload: error,
});
