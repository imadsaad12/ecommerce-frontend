const { REACT_APP_BASE_URL } = process.env;

export const SIGNIN_URL = `${REACT_APP_BASE_URL}/auth/signin`;
export const GENERATE_ACCESS_TOKEN_URL = `${REACT_APP_BASE_URL}/auth/refresh`;
export const VALIDATE_TOKEN_URL = `${REACT_APP_BASE_URL}/auth/validate-token`;

export const GET_ORDERS_URL = `${REACT_APP_BASE_URL}/orders`;
export const GET_STATISTICS_URL = `${REACT_APP_BASE_URL}/orders/statistics`;
export const GET_ORDERS_WITH_LIMITS_URL = (limit) =>
  `${REACT_APP_BASE_URL}/orders?limit=${limit}`;

export const ADD_PRODUCT_URL = `${REACT_APP_BASE_URL}/products`;
