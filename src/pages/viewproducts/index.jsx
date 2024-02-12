import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";
import { products } from "./data";
import Product from "./product";
import { useGetProductsQuery } from "../../apis/products/getProducts";
export default function ViewProducts() {
  const { response, isLoading } = useGetProductsQuery({
    category: "pants",
    type: "men",
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setProducts(response.data);
    }
  }, [isLoading]);
  return (
    <Container>
      <Wrapper>
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </Wrapper>
    </Container>
  );
}
