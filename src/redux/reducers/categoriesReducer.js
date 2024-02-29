import { ADD_CATEGORIES } from "../actions";

const initialState = {
  categories: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return action?.payload ? action.payload : state;
    default:
      return state;
  }
};
