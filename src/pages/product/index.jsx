import React, { useState } from "react";
import { Container, ProductContainer } from "./styles";
import ProductGallery from "./productGallery";
import ProductDetails from "./productDetails";
import Carousel from "../../components/Carousel";
import { useLocation } from "react-router-dom";
import { formatImages } from "../../utilities/formatProducts";

export default function Product() {
  const { state = {} } = useLocation();
  const [product, setProduct] = useState(state?.product || {});

  return (
    <Container>
      {product && (
        <>
          <ProductContainer>
            <ProductGallery images={formatImages(product?.images)} />
            <ProductDetails pdata={product} />
          </ProductContainer>
          <Carousel selectedProduct={product} setSelectedProduct={setProduct} />
        </>
      )}
    </Container>
  );
}
