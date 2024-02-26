const { REACT_APP_BASE_URL } = process.env;

export const SIGNIN_URL = `${REACT_APP_BASE_URL}/auth/signin`;
export const GENERATE_ACCESS_TOKEN_URL = `${REACT_APP_BASE_URL}/auth/refresh`;
export const VALIDATE_TOKEN_URL = `${REACT_APP_BASE_URL}/auth/validate-token`;
export const LOGOUT_URL = `${REACT_APP_BASE_URL}/auth/logout`;

export const GET_ORDERS_URL = `${REACT_APP_BASE_URL}/orders`;
export const ADD_ORDER_URL = `${REACT_APP_BASE_URL}/orders`;
export const GET_STATISTICS_URL = `${REACT_APP_BASE_URL}/orders/statistics`;
export const GET_ORDERS_WITH_LIMITS_URL = (limit) =>
  `${REACT_APP_BASE_URL}/orders?limit=${limit}`;

export const ADD_PRODUCT_URL = `${REACT_APP_BASE_URL}/products`;
export const GET_PRODUCT_BY_ID_URL = (id) =>
  `${REACT_APP_BASE_URL}/products/${id}`;
export const GET_PRODUCTS_URL = (
  category,
  type,
  getProductsWithHightPriority
) =>
  `${REACT_APP_BASE_URL}/products?category=${category}&type=${type}&getProductsWithHightPriority=${getProductsWithHightPriority}`;
export const DELETE_PRODUCT_URL = (id) =>
  `${REACT_APP_BASE_URL}/products/${id}`;
export const EDIT_PRODUCT_URL = (id) => `${REACT_APP_BASE_URL}/products/${id}`;

export const GET_CATEGORIES_URL = `${REACT_APP_BASE_URL}/categories`;
export const ADD_CATEGORY_URL = `${REACT_APP_BASE_URL}/categories`;
export const DELETE_CATEGORY_URL = (id) =>
  `${REACT_APP_BASE_URL}/categories/${id}`;
export const EDIT_CATEGORY_URL = (id) =>
  `${REACT_APP_BASE_URL}/categories/${id}`;
