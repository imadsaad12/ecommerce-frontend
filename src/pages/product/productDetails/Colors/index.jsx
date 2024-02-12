import React, { useState } from "react";
import { Container,ColorName,SelectedContainer,ColorCircle } from "./styles";

export default function Colors({ colors,selectedColor,setselectedOptions }) {
  const changeColor = (c)=>{
    setselectedOptions(prevstate=>({...prevstate,color:c}))
  }
  return (
    <Container>
      <ColorName>Color : {selectedColor}</ColorName>
      {colors.map((color,index) => {
        return (
          <SelectedContainer color={color} selectedColor={selectedColor}>
            <ColorCircle onClick={()=>{changeColor(color)}}color={color}/>
          </SelectedContainer>
        );
      })}
    </Container>
  );
}
