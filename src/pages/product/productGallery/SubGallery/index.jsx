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
  MainGalleryIndex,
  setMainGalleryIndex,
  handleleft,
  handleright,
  SubGalleryIndex,
  setSubGalleryIndex
}) {


  const carouselleft = () => {
    // if (images.length > SubGalleryIndex + nbimages) {
    //   setSubGalleryIndex(SubGalleryIndex + 1);
    //   setMainGalleryIndex(MainGalleryIndex + 1);
    // }
  };

  const handleimage = (i) => {
    setMainGalleryIndex(i);
    // setSubGalleryIndex(i)

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
        // if (images.length > MainGalleryIndex) setSubGalleryIndex(SubGalleryIndex - 1);
      } else if (deltaX < -5) {
        handleleft();
        // if (images.length > MainGalleryIndex + 1)
        //   setSubGalleryIndex(SubGalleryIndex + 1);
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [MainGalleryIndex]);

  return (
    <Container>
      <ArrowContainer>
        <IoIosArrowBack color="black" onClick={handleleft} />
      </ArrowContainer>

      <CarouselContainer>
        <Carousel
          SubGalleryIndex={SubGalleryIndex}
          ref={divRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {images.map((image, index) => {
            return (
              <ImageContainer>
                <ImageWrapper onClick={() => handleimage(index)}>
                  <Image src={image} activeIndex={MainGalleryIndex} Index={index} />
                </ImageWrapper>
              </ImageContainer>
            );
          })}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
