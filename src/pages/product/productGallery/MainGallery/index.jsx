import React, { useState, useRef, useEffect } from "react";
import { Container, Image, Carousel } from "./styles";

export default function MainGallery({
  images,
  MainGalleryIndex,
  handleright,
  handleleft,
}) {
  const divRef = useRef(null);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (startX) {
      const currentX = event.touches[0].clientX;
      const deltaX = currentX - startX;

      if (deltaX > 5) {
        handleright();
      } else if (deltaX < -5) {
        handleleft();
      }

      setStartX(null);
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollDirection = event.deltaX > 0 ? "right" : "left";
      if (scrollDirection === "right" && MainGalleryIndex < images.length - 1) {
        handleright();
      } else if (scrollDirection === "left" && MainGalleryIndex > 0) {
        handleleft();
      }
    };
  
    window.addEventListener("wheel", handleScroll, { passive: false });
  
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [MainGalleryIndex]);

  return (
    <Container>
      <Carousel
        MainGalleryIndex={MainGalleryIndex}
        ref={divRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.map((image) => {
          return <Image src={image} />;
        })}
      </Carousel>
    </Container>
  );
}
