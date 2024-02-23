import React, { useEffect, useState } from "react";
import { Wrapper, MenuBurger } from "./styles";
import Navbar from "../../components/Navbar";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";
import MainSidebar from "../../components/mainsidebar";
import Footer from "../../components/footer";

const withLayout = (WrappedComponent, navBackground) => {
  return function Layout() {
    const [isFadeIn, setIsFadeIn] = useState(true);
    const [sideOpen, setsideOpen] = useState(false);

    const isSmallScreen = useBreakpoint(breakingPoints.sm);

    const handleSidebar = () => {
      setsideOpen(!sideOpen);
    };

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
        {isSmallScreen ? (
          <MainSidebar handleSidebar={handleSidebar} sideOpen={sideOpen} />
        ) : (
          <Navbar isFadeIn={isFadeIn} navBackground={navBackground} />
        )}
        {isSmallScreen && <MenuBurger onClick={handleSidebar} />}
        <WrappedComponent isFadeIn={isFadeIn} />
        <Footer />
      </Wrapper>
    );
  };
};

export default withLayout;
