import React, { useState } from "react";
import {
  Container,
  Name,
  Price,
  Description,
  QuantityPurchase,
  CounterContainer,
  Quantity,
  Buttons,
  AddtoCart,
} from "./styles";
import Colors from "./Colors";
import Sizes from "./Sizes";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { colorsOptions } from "../../../global";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../../redux/cart/cartActions";
import { formatProduct } from "../../../utilities/formatProducts";

export default function ProductDetails({ pdata }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state?.cart);
  const colors = pdata.sizes.map(({ color }) =>
    colorsOptions.find(({ text }) => text === color)
  );

  const [selectedOptions, setselectedOptions] = useState({
    color: colors[0],
    size: null,
  });
  const [quantity, setquantity] = useState(1);

  const isAddToCartDisabled = () => {
    const isItemAvailable = pdata.sizes.some(
      ({ color, size }) =>
        color === selectedOptions?.color?.text && size === selectedOptions.size
    );
    return !isItemAvailable;
  };

  const handleOnAddToCart = () => {
    let newProducts = products;

    const formattedProduct = formatProduct({
      pdata,
      selectedOptions,
      quantity,
    });

    const productAlreadyAdded = products.some(
      ({ productName, size, color }) =>
        productName === formattedProduct.productName &&
        size === formattedProduct.size &&
        color === formattedProduct.color
    );

    if (productAlreadyAdded) {
      newProducts = products.map(
        ({
          productName,
          size,
          color,
          quantity: oldQuantity,
          totalPrice,
          productPrice,
          ...rest
        }) => {
          if (
            productName === formattedProduct.productName &&
            size === formattedProduct.size &&
            color === formattedProduct.color
          ) {
            oldQuantity += quantity;
            totalPrice = oldQuantity * productPrice;
          }
          return {
            productName,
            size,
            color,
            quantity: oldQuantity,
            totalPrice,
            productPrice,
            ...rest,
          };
        }
      );
      dispatch(updateCart(newProducts));
    } else {
      dispatch(addToCart(formattedProduct));
    }
  };

  return (
    <Container>
      <Name>{pdata.name}</Name>
      <Price>{pdata.price}$</Price>
      <Description>{pdata.description}</Description>
      <Colors
        colors={colors}
        selectedColor={selectedOptions.color}
        setselectedOptions={setselectedOptions}
      />
      <Sizes
        selectedOptions={selectedOptions}
        pdata={pdata}
        setselectedOptions={setselectedOptions}
      />
      <QuantityPurchase>
        <CounterContainer>
          <Quantity>{quantity}</Quantity>
          <Buttons>
            <IoIosArrowUp onClick={() => setquantity(quantity + 1)} />
            <IoIosArrowDown
              onClick={() => quantity > 0 && setquantity(quantity - 1)}
            />
          </Buttons>
        </CounterContainer>
        <AddtoCart
          disabled={isAddToCartDisabled()}
          onClick={handleOnAddToCart}
          isDisabled={isAddToCartDisabled()}
        >
          Add To Cart
        </AddtoCart>
      </QuantityPurchase>
    </Container>
  );
}
