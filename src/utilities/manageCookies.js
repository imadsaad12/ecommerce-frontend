import Cookies from "js-cookie";

export const setCookie = (token) => {
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  Cookies.set("accessToken", token, { expires: oneYearFromNow });
};

export const getCookie = () => Cookies.get("accessToken");

export const deleteCookie = () => Cookies.remove("accessToken");
