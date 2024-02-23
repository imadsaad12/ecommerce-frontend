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
  addToCartStyle,
} from "./styles";
import Colors from "./Colors";
import Sizes from "./Sizes";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { colorsOptions } from "../../../global";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../../redux/cart/cartActions";
import { formatProduct } from "../../../utilities/formatProducts";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";
import { formatPrice } from "../../../utilities/formatPrice";

export default function ProductDetails({ pdata }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { products } = useSelector((state) => state?.cart);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  const uniqueColors = Array.from(
    new Set(pdata.sizes.map(({ color }) => color))
  );

  const colors = uniqueColors.map((uniqueColor) =>
    colorsOptions.find(({ text }) => text === uniqueColor)
  );

  const [selectedOptions, setselectedOptions] = useState({
    color: colors[0],
    size: null,
  });
  const [quantity, setquantity] = useState(1);

  const isAddToCartDisabled = () => {
    const isItemAvailable = pdata?.sizes?.some(
      ({ color, size, inStock }) =>
        color === selectedOptions?.color?.text &&
        size === selectedOptions.size &&
        inStock
    );
    return !isItemAvailable;
  };

  const handleOnAddToCart = () => {
    setIsLoading(true);
    let newProducts = products;

    const formattedProduct = formatProduct({
      pdata,
      selectedOptions,
      quantity,
    });

    const productAlreadyAdded = products?.some(
      ({ productName, size, color, category, type }) =>
        productName === formattedProduct.productName &&
        size === formattedProduct.size &&
        color === formattedProduct.color &&
        pdata.category === category &&
        pdata.type === type
    );

    if (productAlreadyAdded) {
      newProducts = products?.map(
        ({
          productName,
          size,
          color,
          quantity: oldQuantity,
          totalPrice,
          productPrice,
          category,
          type,
          ...rest
        }) => {
          if (
            productName === formattedProduct.productName &&
            size === formattedProduct.size &&
            color === formattedProduct.color &&
            pdata.category === category &&
            pdata.type === type
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
            category,
            type,
            ...rest,
          };
        }
      );
      dispatch(updateCart(newProducts));
    } else {
      dispatch(addToCart(formattedProduct));
    }

    setTimeout(() => {
      setIsLoading(false);
      setquantity(1);

      toast.success("Product added to cart", {
        position: isSmallScreen ? "top-left" : "top-right",
        style: {
          width: isSmallScreen && "60%",
        },
      });
    }, 500);
  };

  return (
    <Container>
      <Name>{pdata.name}</Name>
      <Price>{formatPrice(pdata.price)}$</Price>
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
            <IoIosArrowUp
              onClick={() =>
                !isAddToCartDisabled() && setquantity(quantity + 1)
              }
            />
            <IoIosArrowDown
              onClick={() =>
                !isAddToCartDisabled() &&
                quantity > 2 &&
                setquantity(quantity - 1)
              }
            />
          </Buttons>
        </CounterContainer>
        <LoadingButton
          variant="contained"
          disabled={isAddToCartDisabled()}
          onClick={handleOnAddToCart}
          loading={isLoading}
          loadingPosition="start"
          style={addToCartStyle(isAddToCartDisabled())}
        >
          Add To Cart
        </LoadingButton>
      </QuantityPurchase>
    </Container>
  );
}
