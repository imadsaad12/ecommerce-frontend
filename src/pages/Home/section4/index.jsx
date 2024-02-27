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
} from "./styles";
import women from "./women.jpg";
export default function Section4({ targetRef, inView }) {
  return (
    <Container>
      <LeftContainer ref={targetRef}>
        {inView && (
          <>
            <Line />
            <TitleContainer>
              <Title>
                WE <br /> SPARK <br /> PASSION
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
