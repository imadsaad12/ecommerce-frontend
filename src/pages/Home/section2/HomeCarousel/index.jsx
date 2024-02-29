import React, { useState, useRef } from "react";
import {
  CarouselContainer,
  Container,
  ProductContainer,
  Product,
  ProductWrapper,
  ImageWrapper,
  Image,
  Details,
  Name,
  Price,
  ArrowContainer,
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import useBreakpoint from "../../../../utilities/mediaQuery";
import { breakingPoints } from "../../../../global/theme";
import { useNavigate } from "react-router-dom";

export default function HomeCarousel({ data }) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const nbOfVisibleProducts = isSmallScreen ? 1 : 4;
  const [carouselIndex, setcarouselIndex] = useState(0);
  const navigate = useNavigate();

  const handleright = () => {
    setcarouselIndex(carouselIndex + 1);
  };
  const handleleft = () => {
    setcarouselIndex(carouselIndex - 1);
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
        if (carouselIndex !== 0) handleleft();
      } else if (deltaX < -5) {
        if (data.length > carouselIndex + nbOfVisibleProducts) handleright();
      }

      setStartX(null);
    }
  };

  return (
    <Container>
      <ArrowContainer
        style={{ left: "10px" }}
        onClick={() => carouselIndex !== 0 && handleleft()}
      >
        <IoIosArrowBack />
      </ArrowContainer>
      <CarouselContainer
        carouselIndex={carouselIndex}
        ref={divRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {data.map((product) => {
          return (
            <ProductContainer>
              <ProductWrapper>
                <Product>
                  <ImageWrapper>
                    <Image
                      src={`https://storage.googleapis.com/ecommerce-bucket-testing/${product?.images[0].url}`}
                      onClick={() => navigate(`/products/${product._id}`)}
                    />
                  </ImageWrapper>
                  <Details>
                    <Name>{product.name}</Name>
                    <Price>{product.price}$</Price>
                  </Details>
                </Product>
              </ProductWrapper>
            </ProductContainer>
          );
        })}
      </CarouselContainer>
      <ArrowContainer
        style={{ right: "10px" }}
        onClick={() =>
          data.length > carouselIndex + nbOfVisibleProducts && handleright()
        }
      >
        <IoIosArrowForward />
      </ArrowContainer>
    </Container>
  );
}
