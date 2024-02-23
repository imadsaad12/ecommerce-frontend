import React from "react";
import { Container, ColorName, ColorCircle } from "./styles";

export default function Colors({ colors, selectedColor, setselectedOptions }) {
  const changeColor = (c) => {
    setselectedOptions((prevstate) => ({ ...prevstate, color: c }));
  };

  return (
    <Container>
      <ColorName>Color : {selectedColor.text}</ColorName>
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        {colors.map(({ color, text }, index) => {
          return (
            <ColorCircle
              onClick={() => {
                changeColor({ color, text });
              }}
              color={color}
              selectedColor={selectedColor.color}
            />
          );
        })}
      </div>
    </Container>
  );
}
