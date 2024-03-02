import React from "react";
import {
  Container,
  Image,
  TitleContainer,
  TitleTop,
  TitleBottom,
} from "./styles";
import header from "../static/header.jpg";
export default function Section1({ isFadeIn }) {
  return (
    <Container>
      <Image src={header} isFadeIn={isFadeIn} />
      <TitleContainer>
        <TitleTop>FIND YOUR <br/> STRENGTH</TitleTop>
      </TitleContainer>
    </Container>
  );
}
