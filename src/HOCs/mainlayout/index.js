import React, { useEffect, useState } from "react";
import { Wrapper, MenuBurger } from "./styles";
import Navbar from "../../components/Navbar";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";
import MainSidebar from "../../components/mainsidebar";
import Footer from "../../components/footer";
import MobileNavbar from "../../components/MobileNavbar";
import {
  CartIconContainer,
  NumberOfItems,
} from "../../components/Navbar/styles";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const withLayout = (WrappedComponent, navBackground) => {
  return function Layout() {
    const [currentNav, setCurrentNav] = useState(navBackground);
    const [isFadeIn, setIsFadeIn] = useState(true);
    const [sideOpen, setsideOpen] = useState(false);
    const [reachedBottom, setReachedBottom] = useState(true);
    const isCartPage = window.location.pathname === "/cart";
    const { products = [] } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const isSmallScreen = useBreakpoint(breakingPoints.sm);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const handleSidebar = () => {
      setsideOpen(!sideOpen);
    };

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const windowHeight = window.innerHeight;
    //     const documentHeight = document.documentElement.scrollHeight;
    //     const scrollTop = window.scrollY;

    //     if (windowHeight + scrollTop >= documentHeight - 200) {
    //       setReachedBottom(true);
    //     } else {
    //       setReachedBottom(false);
    //     }
    //   };

    //   window.addEventListener("scroll", handleScroll);

    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);

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

        if (currentScrollPos < 10) {
          setIsFadeIn(true);
        }

        prevScrollPos = currentScrollPos;
      };
    });

    return (
      <Wrapper>
        {!isCartPage && (
          <CartIconContainer>
            {products?.length > 0 && (
              <NumberOfItems>{products.length}</NumberOfItems>
            )}
            <HiOutlineShoppingBag
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: "white",
              }}
              onClick={() => navigate("/cart")}
            />
          </CartIconContainer>
        )}
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
