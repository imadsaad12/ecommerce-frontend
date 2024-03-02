import React, { useEffect, useRef, useState } from "react";
import { AnimateCharacter, Container } from "./styles";
import Section1 from "./section1";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section2 from "./section2";

export default function Home({ isFadeIn }) {
  const menRef = useRef(null);
  const [menInView, setMenInView] = useState(false);
  const womenRef = useRef(null);
  const [womenInView, setWomenInView] = useState(false);
  const section5ref = useRef(null);
  const [section5InView, setSection5InView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setMenInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    const womenObserver = new IntersectionObserver(
      ([entry]) => {
        setWomenInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );
    const section5Observer = new IntersectionObserver(
      ([entry]) => {
        setSection5InView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (menRef.current) {
      observer.observe(menRef.current);
    }
    if (womenRef.current) {
      womenObserver.observe(womenRef.current);
    }
    if (section5ref.current) {
      section5Observer.observe(section5ref.current);
    }
    return () => {
      if (menRef.current) {
        observer.unobserve(menRef.current);
      }
      if (womenRef.current) {
        womenObserver.unobserve(womenRef.current);
      }
      if (section5ref.current) {
        section5Observer.unobserve(section5ref.current);
      }
    };
  }, []);

  return (
    <Container>
      <Section1 isFadeIn={isFadeIn} />
      <Section2 />
      <Section3 targetRef={menRef} inView={menInView} />
      <Section4 targetRef={womenRef} inView={womenInView} />
      <Section5  targetRef={section5ref} inView={section5InView} />
      <div
        style={{
          height: "30vh",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontStyle: "italic",
          alignSelf: "center",
        }}
      >
        <AnimateCharacter>
          Revolutionizing e-commerce <br />
          for tomorrow.
        </AnimateCharacter>
      </div>
    </Container>
  );
}
