import React from "react";
import {
  Container,
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
        <div
          ref={targetRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
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
        </div>
      </TitleContainer>
      <Gradient />
    </Container>
  );
}
