import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Section1 from "./section1";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section2 from "./section2";

export default function Home({isFadeIn}) {
  
  return (
    <Container>
      <Section1 isFadeIn={isFadeIn} />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5/>

    </Container>
  );
}
