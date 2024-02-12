import React, { useState } from "react";
import { Container,ColorName,SelectedContainer,ColorCircle } from "./styles";

export default function Colors({ colors,setselectedColor,selectedColor }) {

  return (
    <Container>
      {colors.map((color,index) => {
        return (
          <SelectedContainer color={color} selectedColor={selectedColor}>
            <ColorCircle onClick={()=>{setselectedColor(color)}}color={color}/>
          </SelectedContainer>
        );
      })}
    </Container>
  );
}
