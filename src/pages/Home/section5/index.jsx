import React from "react";
import { Container, Gradient, Image, SubTitle, Title, TitleContainer } from "./styles";
import back from "./back.jpg";
export default function Section5({inView}) {
  return (
    <Container>
      <Image src={back} />
      <TitleContainer>
        <Title>MORE THAN FASHION</Title>
        <SubTitle>
          Come, embrace the symphony of success, where innovation meets
          inspiration, and where the boundaries of possibilities are expanded.
        </SubTitle>
        
      </TitleContainer>
      <Gradient/>
    </Container>
  );
}
