import { formatAsDDMMYYYY } from "./dates";

export const formattedProducts = (products) => {
  const newProductsFormat = products.map(
    ({ sizes, images, updatedAt, price, createdAt, ...rest }) => {
      const imageURL = `https://storage.googleapis.com/ecommerce-bucket-testing/${images[0].url}`;
      const formattedSizes = sizes
        .filter((elm) => elm !== null)
        .map(
          ({ size, color, inStock }) =>
            `${size} - ${color} - ${inStock ? "In Stock" : "Out Of Stock"}`
        );
      return {
        ...rest,
        imageURL,
        price: price + " USD",
        formattedSizes,
        createdAt: formatAsDDMMYYYY(createdAt),
      };
    }
  );
  return newProductsFormat;
};
