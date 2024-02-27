import React from "react";
import { Container, ColorName, ColorCircle } from "./styles";

export default function Colors({ colors, selectedColor, setselectedOptions,pdata,setMainGalleryIndex ,setSubGalleryIndex,SubGalleryIndex}) {
  const changeColor = (c) => {
    let imageindex=findImageIndexByColor(c)
    setMainGalleryIndex(imageindex)
    setSubGalleryIndex(imageindex)
    setselectedOptions((prevstate) => ({ ...prevstate, color: c }));
  };
  function findImageIndexByColor({text}) {
    for (let i = 0; i < pdata.images.length; i++) {
        if (pdata.images[i].color === text) {
            return i;
        }
    }
    return -1; // If color not found
}
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
