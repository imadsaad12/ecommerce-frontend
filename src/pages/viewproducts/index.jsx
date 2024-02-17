import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";
import Product from "./product";
import { useGetProductsQuery } from "../../apis/products/getProducts";
import ProductSkeleton from "./skeleteon";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";
import { useParams, use, useLocation } from "react-router-dom";

export default function ViewProducts() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const type = queryParams.get("type") || "men";
  const category = queryParams.get("category") || "Shirts";

  const { response, isLoading, refetch } = useGetProductsQuery({
    type,
    category,
  });

  const [products, setProducts] = useState([]);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  useEffect(() => {
    if (!isLoading) {
      setProducts(response?.data);
    }
    refetch()
      .then(({ data: { data } }) => setProducts(data))
      .catch((err) => console.log(err));
  }, [isLoading, location.search]);

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
