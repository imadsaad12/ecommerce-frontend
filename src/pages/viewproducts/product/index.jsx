import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Image,
  Name,
  Price,
  ImageContainer,
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
    const urlPrefix = "https://storage.googleapis.com/ecommerce-bucket-testing";

    const selectedColorName = colorsOptions.find(
      ({ color }) => color === selectedColor
    )?.text;

    const image = images.find((img) => img.color === selectedColorName);

    if (image) {
      return `${urlPrefix}/${image.url}`;
    }
  };

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
        <Price>{formatPrice(price)}$</Price>
        <Colors
          setselectedColor={setselectedColor}
          colors={colors}
          selectedColor={selectedColor}
        />
      </Wrapper>
    </Container>
  );
}
