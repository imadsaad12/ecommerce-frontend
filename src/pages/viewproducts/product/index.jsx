import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Image,
  Name,
  Price,
  ImageContainer,
  PriceContainer,
  DiscountPrice,
  Sale
} from "./styles";
import Colors from "./Colors";
import { colorsOptions } from "../../../global";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utilities/formatPrice";

export default function Product({ product }) {
  const navigate = useNavigate();
  const { images, name, price, sizes } = product;
  const uniqueColors = Array.from(new Set(sizes?.map(({ color }) => color)));

  const colors = uniqueColors.map((uniqueColor) => {
    const matchingOption = colorsOptions.find(
      ({ text }) => text === uniqueColor
    );
    return matchingOption ? matchingOption.color : null;
  });

  const [selectedColor, setselectedColor] = useState(colors[0]);

  const findImage = () => {
    const urlPrefix = "https://storage.googleapis.com/pointnul-image";

    const selectedColorName = colorsOptions.find(
      ({ color }) => color === selectedColor
    )?.text;

    const image = images.find((img) => img.color === selectedColorName);

    if (image) {
      return `${urlPrefix}/${image.url}`;
    }
  };
  function calculateDiscountedPrice(originalPrice) {
    // Calculate 15% of the original price
    const discount = originalPrice * 0.30;
    
    // Subtract the discount from the original price
    const discountedPrice = originalPrice - discount;
    
    return discountedPrice;
}
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image
            src={findImage(selectedColor)}
            onClick={() => navigate(`/products/${product._id}`)}
          />
        </ImageContainer>
        <Name>{name}</Name>
        {/* <PriceContainer>
        <Price>{formatPrice(price)}$</Price>
        </PriceContainer> */}
        <PriceContainer>
        <Price sale={product.type=="women"}>{formatPrice(price)}$</Price>
        {product.type=="women" && <DiscountPrice>{calculateDiscountedPrice(price)}$</DiscountPrice>}
        </PriceContainer>
        {product.type=="women" &&<Sale>Save 30%</Sale>}
        <Colors
          setselectedColor={setselectedColor}
          colors={colors}
          selectedColor={selectedColor}
        />
      </Wrapper>
    </Container>
  );
}
