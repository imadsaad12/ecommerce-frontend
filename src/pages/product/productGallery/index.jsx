import React, { useState } from "react";
import { Container } from "./styles";
import MainGallery from "./MainGallery";
import SubGallery from "./SubGallery";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";

export default function ProductGallery({ images,MainGalleryIndex,setMainGalleryIndex,SubGalleryIndex,setSubGalleryIndex }) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const subgallerynbimages = isSmallScreen ? 4 : 5;

  const handleleft = () =>{
  MainGalleryIndex + 1 < images.length && setMainGalleryIndex(MainGalleryIndex + 1);
  SubGalleryIndex + subgallerynbimages<images.length   && setSubGalleryIndex(SubGalleryIndex+1)
  }
  const handleright = () => {
    MainGalleryIndex >0 && setMainGalleryIndex(MainGalleryIndex - 1);
    SubGalleryIndex >0 && setSubGalleryIndex(SubGalleryIndex-1)
  };
  return (
    <Container>
      {console.log(MainGalleryIndex,SubGalleryIndex)}
      <MainGallery
        images={images}
        handleleft={handleleft}
        handleright={handleright}
        MainGalleryIndex={MainGalleryIndex}
      />
      <SubGallery
        setMainGalleryIndex={setMainGalleryIndex}
        images={images}
        SubGalleryIndex={SubGalleryIndex}
        setSubGalleryIndex={setSubGalleryIndex}
        MainGalleryIndex={MainGalleryIndex}
        handleleft={handleleft}
        handleright={handleright}
      />
    </Container>
  );
}
