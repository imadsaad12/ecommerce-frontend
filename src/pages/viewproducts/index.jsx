import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";
import Product from "./product";
import { useGetProductsQuery } from "../../apis/products/getProducts";
import ProductSkeleton from "./skeleteon";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";

export default function ViewProducts() {
  const { response, isLoading } = useGetProductsQuery({
    category: "pants",
    type: "men",
  });
  const [products, setProducts] = useState([]);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  useEffect(() => {
    if (!isLoading) {
      setProducts(response.data);
    }
  }, [isLoading]);

  return (
    <Container>
      <Wrapper>
        {isLoading ? (
          <>
            {Array.from({ length: isSmallScreen ? 5 : 10 }, () => {
              return <ProductSkeleton />;
            })}
          </>
        ) : (
          <>
            {products?.map((product) => {
              return <Product product={product} />;
            })}
          </>
        )}
      </Wrapper>
    </Container>
  );
}
