import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Section1 from "./section1";
import Section2 from "./section2";

export default function Home() {
  const [scrolled, setscrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Container>
      <Section1 scrolled={scrolled} />
      <Section2 />
    </Container>
  );
}
