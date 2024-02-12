import React, { useState } from "react";
import { Container, Wrapper, Image, Name, Price } from "./styles";
import Colors from "./Colors";
import { colorsOptions } from "../../../global";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();
  const { images, name, price, sizes } = product;

  const colors = sizes.map(
    ({ color }) => colorsOptions.find(({ text }) => text === color).color
  );
  const [selectedColor, setselectedColor] = useState(colors[0]);

  const findImage = () => {
    const urlPrefix = "https://storage.googleapis.com/ecommerce-bucket-testing";
    const selectedColorName = colorsOptions.find(
      ({ color }) => color === selectedColor
    ).text;

    const image = images.find((img) => img.color === selectedColorName);
    if (image) {
      return `${urlPrefix}/${image.url}`;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Image
          src={findImage(selectedColor)}
          onClick={() => navigate("/product", { state: { product } })}
        />
        <Name>{name}</Name>
        <Price>{price}$</Price>
        <Colors
          setselectedColor={setselectedColor}
          colors={colors}
          selectedColor={selectedColor}
        />
      </Wrapper>
    </Container>
  );
}
