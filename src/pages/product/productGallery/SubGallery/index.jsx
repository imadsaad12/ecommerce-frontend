import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Carousel,
  ImageContainer,
  Image,
  ImageWrapper,
  CarouselContainer,
  ArrowContainer,
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";

export default function SubGallery({
  images,
  currentIndex,
  setcurrentIndex,
  handleleft,
  handleright,
}) {
  const [carouselIndex, setcarouselIndex] = useState(0);

  const carouselleft = () => {
    if (images.length > currentIndex + 1) {
      setcarouselIndex(carouselIndex + 1);
      setcurrentIndex(currentIndex + 1);
    }
  };

  const handleimage = (i) => {
    setcurrentIndex(i);
  };

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
        if (images.length > currentIndex) setcarouselIndex(carouselIndex - 1);
      } else if (deltaX < -5) {
        handleleft();
        if (images.length > currentIndex + 1)
          setcarouselIndex(carouselIndex + 1);
      }

      setStartX(null);
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollDirection = event.deltaX > 0 ? "right" : "left";
      if (scrollDirection === "right" && currentIndex < images.length - 1) {
        handleright();
      } else if (scrollDirection === "left" && currentIndex > 0) {
        handleleft();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  return (
    <Container>
      <ArrowContainer>
        <IoIosArrowBack color="black" onClick={carouselleft} />
      </ArrowContainer>

      <CarouselContainer>
        <Carousel
          carouselIndex={carouselIndex}
          ref={divRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {images.map((image, index) => {
            return (
              <ImageContainer>
                <ImageWrapper onClick={() => handleimage(index)}>
                  <Image src={image} activeIndex={currentIndex} Index={index} />
                </ImageWrapper>
              </ImageContainer>
            );
          })}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
