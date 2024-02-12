import React, { useState } from "react";
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
import image4 from "./image4.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

let products = ["1", "2", "3", "4", "5", "6"];
export default function Carousel() {
  const [carouselIndex, setcarouselIndex] = useState(0);
  const handleright = ()=>{
    setcarouselIndex(carouselIndex+1)
  }
  const handleleft = ()=>{
    setcarouselIndex(carouselIndex-1)
  }
  return (
    <Container>
      <ArrowContainer style={{ left: "10px" }} onClick={handleright}>
        <IoIosArrowBack />
      </ArrowContainer>
      <CarouselContainer carouselIndex={carouselIndex}>
        {products.map((product) => {
          return (
            <ProductContainer>
              <ProductWrapper>
                <Product>
                  <ImageWrapper>
                    <Image src={image4} />
                  </ImageWrapper>
                  <Details>
                    <Name>CROP TOP SECOND SKIN</Name>
                    <Price>15$</Price>
                  </Details>
                </Product>
              </ProductWrapper>
            </ProductContainer>
          );
        })}
      </CarouselContainer>
      <ArrowContainer  onClick={handleleft} style={{ right: "10px" }}>
        <IoIosArrowForward />
      </ArrowContainer>
    </Container>
  );
}
