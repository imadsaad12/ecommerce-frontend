import React, { useEffect, useState } from "react";
import { Wrapper, MenuBurger } from "./styles";
import Navbar from "../../components/Navbar";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";
import MainSidebar from "../../components/mainsidebar";
import Footer from "../../components/footer";
import MobileNavbar from "../../components/MobileNavbar";

const withLayout = (WrappedComponent, navBackground) => {
  return function Layout() {
    const [currentNav, setCurrentNav] = useState(navBackground);
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
          if (window.location.pathname === "/products") {
            if (currentScrollPos > 450) {
              setCurrentNav("non-transparent");
            } else {
              setCurrentNav("transparent");
            }
          }
          setIsFadeIn(true);
        } else {
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
          <Navbar isFadeIn={isFadeIn} navBackground={currentNav} />
        )}
        {isSmallScreen && (
          <MobileNavbar
            handleSidebar={handleSidebar}
            isFadeIn={isFadeIn}
            navBackground={currentNav}
          />
        )}
        <WrappedComponent isFadeIn={isFadeIn} />
        <Footer />
      </Wrapper>
    );
  };
};

export default withLayout;
