import React from "react";
import { Container, ProductContainer } from "./styles";
import ProductGallery from "./productGallery";
import ProductDetails from "./productDetails";
import Carousel from "../../components/Carousel";
import { useLocation } from "react-router-dom";
import { formatImages } from "../../utilities/formatProducts";

export default function Product() {
  const { state = {} } = useLocation();

  return (
    <Container>
      <ProductContainer>
        {state?.product && (
          <>
            <ProductGallery images={formatImages(state.product?.images)} />
            <ProductDetails pdata={state?.product} />
          </>
        )}
      </ProductContainer>
      <Carousel />
    </Container>
  );
}
