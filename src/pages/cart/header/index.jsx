import React from "react";
import { Container, SubTitle, Title } from "./styles";

export default function Header({ isFormOpen }) {
  return (
    <Container>
      <Title>{isFormOpen ? "Address Information" : "Shopping Cart"}</Title>
      <SubTitle>
        {isFormOpen ? "Cart / Address Form" : "Home / Shopping Cart"}{" "}
      </SubTitle>
    </Container>
  );
}
