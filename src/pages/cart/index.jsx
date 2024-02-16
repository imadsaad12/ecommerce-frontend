import React from "react";
import { BodyContainer, Container } from "./styles";
import Header from "./header";
import Products from "./Products";
import Costs from "./Costs";
import { useSelector } from "react-redux";

export default function Cart() {
  const { products = [] } = useSelector((state) => state?.cart);

  return (
    <Container>
      <Header />
      <BodyContainer>
        <Products data={products} />
        <Costs data={products} />
      </BodyContainer>
    </Container>
  );
}
