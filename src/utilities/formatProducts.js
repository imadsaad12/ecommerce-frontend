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

export const formatImages = (images) => {
  const urlPrefix = "https://storage.googleapis.com/ecommerce-bucket-testing";
  const formattedImages = images.map(({ url }) => `${urlPrefix}/${url}`);
  return formattedImages;
};

export const formatProduct = ({ pdata, selectedOptions, quantity }) => {
  let product = {};
  product.productId = pdata._id;
  product.productImage =
    pdata.images.find(({ color }) => color === selectedOptions.color.text)
      ?.url || pdata.images[0];
  product.color = selectedOptions.color.text;
  product.size = selectedOptions.size;
  product.quantity = quantity;
  product.totalPrice = pdata.price * quantity;
  product.productName = pdata.name;
  product.productPrice = pdata.price;

  return product;
};
