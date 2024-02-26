import React, { useEffect, useState } from "react";
import { Container, ProductContainer } from "./styles";
import ProductGallery from "./productGallery";
import ProductDetails from "./productDetails";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import { formatImages } from "../../utilities/formatProducts";
import { useGetProductByIdQuery } from "../../apis/products/getProductById";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { response, isLoading } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (!isLoading) {
      setProduct(response.data);
    }
  }, [isLoading, response]);

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
