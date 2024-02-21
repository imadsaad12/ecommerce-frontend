import React, { useState } from "react";
import {
  Container,
  ImageAndDescriptionContainer,
  Row,
  Image,
  ContentContainer,
  ProductName,
  QuantityContainer,
  Quantity,
  ArrowsContainer,
  DescriptionContainer,
  TotalPrice,
  QuantitySmallContainer,
} from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";
import { updateCart } from "../../../redux/cart/cartActions";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../../utilities/formatPrice";

export default function Product({ data }) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const urlPrefix = "https://storage.googleapis.com/ecommerce-bucket-testing";
  const [products, setProducts] = useState(data);
  const dispatch = useDispatch();

  const handleOnClick = (index, newQuantity) => {
    let newProducts = [];

    if (newQuantity <= 0) {
      newProducts = products.filter((elm, i) => i !== index);
    } else {
      newProducts = products.map((elm, i) => {
        if (i === index) {
          elm.quantity = newQuantity;
          elm.totalPrice = newQuantity * elm.productPrice;
        }
        return elm;
      });
    }

    dispatch(updateCart(newProducts));
    setProducts(newProducts);
  };

  return (
    <Container>
      {products?.map(
        (
          {
            productImage,
            productName,
            productPrice,
            color,
            size,
            quantity,
            totalPrice,
          },
          index
        ) => {
          return (
            <Row>
              <ImageAndDescriptionContainer>
                <Image src={`${urlPrefix}/${productImage}`} />
                <ContentContainer>
                  <ProductName>{productName}</ProductName>
                  <DescriptionContainer>
                    <p>{formatPrice(productPrice)} $</p>
                    <p>Color : {color}</p>
                    <p>Size : {size}</p>
                  </DescriptionContainer>
                </ContentContainer>
              </ImageAndDescriptionContainer>
              <QuantityContainer>
                {isSmallScreen ? (
                  <QuantitySmallContainer>
                    <IoIosArrowUp
                      onClick={() => handleOnClick(index, quantity + 1)}
                    />
                    <Quantity>{quantity}</Quantity>
                    <IoIosArrowDown
                      onClick={() => handleOnClick(index, quantity - 1)}
                    />
                  </QuantitySmallContainer>
                ) : (
                  <>
                    <Quantity>{quantity}</Quantity>
                    <ArrowsContainer>
                      <IoIosArrowUp
                        onClick={() => handleOnClick(index, quantity + 1)}
                      />
                      <IoIosArrowDown
                        onClick={() => handleOnClick(index, quantity - 1)}
                      />
                    </ArrowsContainer>
                  </>
                )}
              </QuantityContainer>
              <TotalPrice>Total price : {formatPrice(totalPrice)} $</TotalPrice>
            </Row>
          );
        }
      )}
    </Container>
  );
}
