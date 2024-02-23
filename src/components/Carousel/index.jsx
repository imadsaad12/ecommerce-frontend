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
import { useSelector } from "react-redux";
import { formatPrice } from "../../utilities/formatPrice";

export default function Carousel({ selectedProduct, setSelectedProduct }) {
  const [carouselIndex, setcarouselIndex] = useState(0);
  const cachedProducts = useSelector((state) => state?.products || []);

  const [products, setProducts] = useState(
    cachedProducts.filter(({ _id }) => _id !== selectedProduct._id)
  );

  const handleright = () => {
    setcarouselIndex(carouselIndex + 1);
  };
  const handleleft = () => {
    setcarouselIndex(carouselIndex - 1);
  };

  useEffect(() => {
    setProducts(
      cachedProducts.filter(({ _id }) => _id !== selectedProduct._id)
    );
  }, [selectedProduct]);

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
                    <Image
                      src={`https://storage.googleapis.com/ecommerce-bucket-testing/${product?.images[0].url}`}
                      onClick={() => setSelectedProduct(product)}
                    />
                  </ImageWrapper>
                  <Details>
                    <Name>{product.name}</Name>
                    <Price>{formatPrice(product.price)}$</Price>
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
