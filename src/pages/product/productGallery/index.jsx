import React, { useState, useRef } from "react";
import { Container } from "./styles";
import MainGallery from "./MainGallery";
import SubGallery from "./SubGallery";
// import { images } from "./data";

export default function ProductGallery({ images }) {
  console.log(images);
  const [currentIndex, setcurrentIndex] = useState(0);
  const handleleft = () =>
    currentIndex + 1 < images.length && setcurrentIndex(currentIndex + 1);

  const handleright = () => {
    if (currentIndex - 1 >= 0) {
      setcurrentIndex(currentIndex - 1);
    }
  };
  return (
    <Container>
      <MainGallery
        images={images}
        handleleft={handleleft}
        handleright={handleright}
        currentIndex={currentIndex}
      />
      <SubGallery
        setcurrentIndex={setcurrentIndex}
        images={images}
        currentIndex={currentIndex}
      />
    </Container>
  );
}
