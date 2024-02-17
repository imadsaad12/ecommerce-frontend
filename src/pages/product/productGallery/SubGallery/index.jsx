import React, { useState } from "react";
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

export default function SubGallery({ images, currentIndex, setcurrentIndex }) {
  const [carouselIndex, setcarouselIndex] = useState(0);
  const carouselleft = () => {
    setcarouselIndex(carouselIndex + 1);
  };
  const handleimage = (i) => {
    setcurrentIndex(i);
  };
  return (
    <Container>
      <ArrowContainer>
        <IoIosArrowBack color="black" onClick={carouselleft} />
      </ArrowContainer>

      <CarouselContainer>
        <Carousel carouselIndex={carouselIndex}>
          {images.map((image, index) => {
            return (
              <ImageContainer>
                <ImageWrapper
                  onClick={() => {
                    handleimage(index);
                  }}
                >
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
