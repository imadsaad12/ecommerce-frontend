import { formatAsDDMMYYYY } from "./dates";

export const formattedProducts = (products) => {
  const newProductsFormat = products.map(
    ({ sizes, images, updatedAt, price, createdAt, ...rest }) => {
      const imageURL = `https://storage.googleapis.com/pointnul-image/${images[0].url}`;
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
  const urlPrefix = "https://storage.googleapis.com/pointnul-image";
  const formattedImages = images?.map(({ url }) => `${urlPrefix}/${url}`);
  return formattedImages;
};

function calculateDiscountedPrice(originalPrice) {
  // Calculate 15% of the original price
  const discount = originalPrice * 0.30;
  
  // Subtract the discount from the original price
  const discountedPrice = originalPrice - discount;
  
  return discountedPrice;
}

export const formatProduct = ({ pdata, selectedOptions, quantity }) => {
  let product = {};
  product.productId = pdata._id;
  product.productImage =
    pdata?.images?.find(({ color }) => color === selectedOptions?.color?.text)
      ?.url || pdata.images[0].url;
  product.color = selectedOptions?.color?.text;
  product.size = selectedOptions?.size;
  product.quantity = quantity;
  // if(pdata.type=="women" && pdata.category!="su24" && pdata.category!="burkini" ){
  //   product.totalPrice = calculateDiscountedPrice(pdata.price) * quantity;
  // }else{
  //   product.totalPrice = pdata.price * quantity;

  // }
  product.totalPrice = pdata.price * quantity;
  product.productName = pdata.name;
  // if(pdata.type=="women" && pdata.category!="su24" && pdata.category!="burkini"){
  //   product.productPrice = calculateDiscountedPrice(pdata.price) ;
  // }else{
  //   product.productPrice = pdata.price;

  // }
  product.productPrice = pdata.price;
  product.type = pdata.type;
  product.category = pdata.category;

  return product;
};
