import React, { useEffect, useState } from "react";
import {
  CategoriesContainer,
  Category,
  Circle,
  Container,
  Gender,
  Link,
  PoweredBy,
  Root,
  SocialMediaContainer,
  Text,
  Title,
  Wrapper,
  Logo,
} from "./styles";
import { SiGmail, SiNike } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaRegCopyright, FaTiktok } from "react-icons/fa";
import { useGetCategoriesQuery } from "../../apis/categories/getCategories";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";
import MobileFooter from "./mobile";
import logoLight from "../../static/logoLight.png";
export default function Footer() {
  const { isLoading, response } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  useEffect(() => {
    if (!isLoading) {
      setCategories(response?.data);
    }
  }, [isLoading]);

  return (
    <>
      {isSmallScreen ? (
        <MobileFooter />
      ) : (
        <Root>
          <Container>
            <Wrapper>
              <Logo src={logoLight} />
            </Wrapper>
            {/* <Wrapper style={{ width: "10%" }}>
              <Title>All Categories</Title>
              <CategoriesContainer>
                {categories?.slice(0, 4)?.map(({ category }) => (
                  <Category>{category}</Category>
                ))}
                {categories?.length > 4 && (
                  <Category key="more">... and more</Category>
                )}
              </CategoriesContainer>
            </Wrapper> */}
            <Wrapper style={{ width: isSmallScreen ? "20%" : "10%" }}>
              <Title>Policy</Title>
              <CategoriesContainer>
                <Gender>No Refund</Gender>
                <Gender>Exchange within 7 days</Gender>
              </CategoriesContainer>
            </Wrapper>
            <Wrapper style={{ width: isSmallScreen ? "20%" : "10%" }}>
              <Title>Social Media</Title>
              <SocialMediaContainer>
                <Circle
                  onClick={() => {
                    window.open(
                      "https://www.tiktok.com/@point.nul?_t=8lvf4vo0tyk&_r=1",
                      "_blank"
                    );
                  }}
                >
                  <FaTiktok style={{ fontSize: "20px" }} />
                </Circle>
                <Circle
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/pointnul?igsh=MTMzdDl2a2p2MTM2bg==",
                      "_blank"
                    );
                  }}
                >
                  <FaInstagram style={{ fontSize: "20px" }} />
                </Circle>
                <Circle onClick={handleGmail}>
                  <SiGmail style={{ fontSize: "20px" }} />
                </Circle>
              </SocialMediaContainer>
            </Wrapper>
          </Container>
          <PoweredBy>
            Copyright
            <FaRegCopyright
              style={{
                fontSize: "15px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            />
            2024 <Link href="https://cedars-js.com">cedars-js.com</Link>
          </PoweredBy>
        </Root>
      )}
    </>
  );
}
