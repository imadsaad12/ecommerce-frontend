import React from "react";
import {
  Container,
  Content,
  Gradient,
  Image,
  SubTitle,
  Title,
  TitleContainer,
} from "./styles";
import back from "./back.jpg";

export default function Section5({ inView, targetRef }) {
  return (
    <Container>
      <Image src={back} />
      <TitleContainer>
        <Content ref={targetRef}>
          {inView && (
            <>
              <Title>MORE THAN FASHION</Title>
              <SubTitle>
                Come, embrace the symphony of success, where innovation meets
                inspiration, and where the boundaries of possibilities are
                expanded.
              </SubTitle>
            </>
          )}
        </Content>
      </TitleContainer>
      <Gradient />
    </Container>
  );
}
