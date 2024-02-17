import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Navbar from "../../components/Navbar";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";

export default function Layout(WrappedComponent) {
  const [isFadeIn, setIsFadeIn] = useState(true);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsFadeIn(true);
      } else if (!isSmallScreen) {
        setIsFadeIn(false);
      }

      prevScrollPos = currentScrollPos;
    };
  });

  return (
    <Wrapper>
      <Navbar isFadeIn={isFadeIn} />
      <WrappedComponent />
    </Wrapper>
  );
}
