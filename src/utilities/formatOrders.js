import { formatAsDDMMYYYY } from "./dates";

export const formatRecentOrders = (orders) => {
  return orders?.map(
    ({ products, totalPrice, clientFullName, createdAt, uuid }) => {
      const date = formatAsDDMMYYYY(createdAt);
      const numberOfItems = products.reduce(
        (accumulator, currValue) => accumulator + currValue.quantity,
        0
      );

      return {
        numberOfItems: "x" + numberOfItems,
        totalPrice,
        clientFullName,
        date,
        uuid,
      };
    }
  );
};

export const formatOrder = (data, finalPrice) => {
  const products = data.map(({ totalPrice, productPrice, ...rest }) => ({
    ...rest,
  }));

  const clientFullName = "imad mohammad saad";
  const phoneNumber = "81360613";
  const email = "imad.alhaj.saad@gmail.com";
  const address = {
    region: "chiyah",
    street: "azzarye",
    building: "nojom",
    floor: 4,
  };

  return {
    products,
    clientFullName,
    phoneNumber,
    email,
    address,
    totalPrice: finalPrice,
  };
};
