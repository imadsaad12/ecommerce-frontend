import React, { useState, useEffect } from "react";
import { Container,Text } from "./styles";
import HomeCarousel from "./HomeCarousel";
import { useGetProductsQuery } from "../../../apis/products/getProducts";
export default function Section2() {
  const { response, isLoading } = useGetProductsQuery({
    getProductsWithHightPriority: true,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setProducts(response?.data);
    }
  }, [isLoading]);

  return (
    <Container>
      <Text>Our New Collection</Text>
      <HomeCarousel data={products} />
    </Container>
  );
}
