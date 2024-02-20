import React from "react";
import {
  Container,
  Image,
  TitleContainer,
  TitleTop,
  TitleBottom,
} from "./styles";
import header from "../static/header.jpg";
export default function Section1({ scrolled }) {
  return (
    <Container>
      <Image src={header} scrolled={scrolled} />
      <TitleContainer>
        <TitleTop>FIND YOUR</TitleTop>
        <TitleBottom>STRENGTH</TitleBottom>
      </TitleContainer>
    </Container>
  );
}
