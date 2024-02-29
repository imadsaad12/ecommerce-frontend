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
import { AnimateCharacter } from "../styles";
export default function Section4({ targetRef, inView }) {
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
        <Button>Shop Women</Button>
      </RightContainer>
    </Container>
  );
}
