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
