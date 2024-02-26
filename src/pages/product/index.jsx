import React, { useEffect, useState } from "react";
import { Container, ProductContainer } from "./styles";
import ProductGallery from "./productGallery";
import ProductDetails from "./productDetails";
import Carousel from "../../components/Carousel";
import { useLocation, useParams } from "react-router-dom";
import { formatImages } from "../../utilities/formatProducts";
import { useGetProductByIdQuery } from "../../apis/products/getProductById";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { response, isLoading } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (!isLoading) {
      setProduct(response.data);
    }
  }, [isLoading]);

  return (
    <Container>
      {!isLoading && (
        <>
          <ProductContainer>
            <ProductGallery images={formatImages(product)} />
            <ProductDetails pdata={product} />
          </ProductContainer>
          <Carousel selectedProduct={product} setSelectedProduct={setProduct} />
        </>
      )}
    </Container>
  );
}
