import React, { useState } from "react";
import { Container, ColorName, SelectedContainer, ColorCircle } from "./styles";

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
            <SelectedContainer color={color} selectedColor={selectedColor}>
              <ColorCircle
                onClick={() => {
                  changeColor({ color, text });
                }}
                color={color}
                selectedColor={selectedColor.color}
              />
            </SelectedContainer>
          );
        })}
      </div>
    </Container>
  );
}
