import React, { useEffect } from "react";
import {
  Container,
  SelectedContainer,
  ColorCircle,
  ColorContainer,
} from "./styles";

export default function Colors({ colors, setselectedColor, selectedColor }) {
  useEffect(() => {
    setselectedColor(colors[0]);
  }, []);

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
