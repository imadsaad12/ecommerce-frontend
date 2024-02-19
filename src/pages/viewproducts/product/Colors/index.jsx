import React, { useState } from "react";
import { Container, ColorName, SelectedContainer, ColorCircle ,ColorContainer} from "./styles";

export default function Colors({ colors, setselectedColor, selectedColor }) {
  return (
    <Container>
      {colors.map((color, index) => {
        return (
          <ColorContainer>
            <SelectedContainer color={color} selectedColor={selectedColor} />
            <ColorCircle
              onClick={() => {
                setselectedColor(color);
              }}
              color={color}
            />
          </ColorContainer>
        );
      })}
    </Container>
  );
}
