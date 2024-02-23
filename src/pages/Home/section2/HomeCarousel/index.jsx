import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

export default function HomeCarousel({ data }) {
  const [carouselIndex, setcarouselIndex] = useState(0);
  const navigate = useNavigate();

  const handleright = () => {
    setcarouselIndex(carouselIndex + 1);
  };
  const handleleft = () => {
    setcarouselIndex(carouselIndex - 1);
  };

  return (
    <Container>
      <ArrowContainer style={{ left: "10px" }} onClick={handleright}>
        <IoIosArrowBack />
      </ArrowContainer>
      <CarouselContainer carouselIndex={carouselIndex}>
        {data.map((product) => {
          return (
            <ProductContainer>
              <ProductWrapper>
                <Product>
                  <ImageWrapper>
                    <Image
                      src={`https://storage.googleapis.com/ecommerce-bucket-testing/${product?.images[0].url}`}
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
      <ArrowContainer onClick={handleleft} style={{ right: "10px" }}>
        <IoIosArrowForward />
      </ArrowContainer>
    </Container>
  );
}
