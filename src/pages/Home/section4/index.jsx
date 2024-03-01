import React from "react";
import {
  Button,
  Container,
  Image,
  LeftContainer,
  Line,
  RightContainer,
  TitleContainer,
  Title,
  AnimatedWords,
} from "./styles";
import women from "./women.jpg";
import { useNavigate } from "react-router-dom";
export default function Section4({ targetRef, inView }) {
  const navigate = useNavigate();

  return (
    <Container>
      <LeftContainer ref={targetRef}>
        {inView && (
          <>
            <Line />
            <TitleContainer>
              <Title>
                <AnimatedWords>
                  WE <br /> SPARK <br /> PASSION
                </AnimatedWords>
              </Title>
            </TitleContainer>
          </>
        )}
      </LeftContainer>
      <RightContainer>
        <Image src={women} />
        <Button onClick={() => navigate("/products?type=women&category=*")}>
          Shop Women
        </Button>
      </RightContainer>
    </Container>
  );
}
