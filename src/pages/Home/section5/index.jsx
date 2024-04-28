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
                Through innovative design and advanced fabric technology, we aim
                to elevate your active lifestyle by delivering sweat-proof,
                breathable, and stylish pieces that inspire confidence and
                optimize your every move.
              </SubTitle>
            </>
          )}
        </Content>
      </TitleContainer>
      <Gradient />
    </Container>
  );
}
