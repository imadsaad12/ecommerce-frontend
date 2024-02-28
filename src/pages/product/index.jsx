import React, { useEffect, useState } from "react";
import { Container, ProductContainer } from "./styles";
import ProductGallery from "./productGallery";
import ProductDetails from "./productDetails";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import { formatImages } from "../../utilities/formatProducts";
import { useGetProductByIdQuery } from "../../apis/products/getProductById";
import ProductDetailsSkeleton from "./Skeleteon/index";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { response, isLoading } = useGetProductByIdQuery(id);
  const [MainGalleryIndex, setMainGalleryIndex] = useState(0);
  const [SubGalleryIndex, setSubGalleryIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProduct(response.data);
    }
  }, [isLoading, response]);

  return (
    <Container>
      {product ? (
        <>
          <ProductContainer>
            <ProductGallery
              images={formatImages(product?.images)}
              MainGalleryIndex={MainGalleryIndex}
              setMainGalleryIndex={setMainGalleryIndex}
              SubGalleryIndex={SubGalleryIndex}
              setSubGalleryIndex={setSubGalleryIndex}
            />
            <ProductDetails
              pdata={product}
              setMainGalleryIndex={setMainGalleryIndex}
              SubGalleryIndex={SubGalleryIndex}
              setSubGalleryIndex={setSubGalleryIndex}
            />
          </ProductContainer>
          <Carousel selectedProduct={product} setSelectedProduct={setProduct} />
        </>
      ) : (
        <ProductDetailsSkeleton />
      )}
    </Container>
  );
}
