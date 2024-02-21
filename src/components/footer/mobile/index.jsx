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
} from "./styles";
import { SiNike } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { useGetCategoriesQuery } from "../../../apis/categories/getCategories";
import { breakingPoints } from "../../../global/theme";
import useBreakpoint from "../../../utilities/mediaQuery";

export default function MobileFooter() {
  const { isLoading, response } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setCategories(response?.data);
    }
  }, [isLoading]);

  return (
    <Root>
      <Container>
        <Wrapper style={{ width: "40%" }}>
          <Title>All Categories</Title>
          <CategoriesContainer>
            {categories.map(({ category }) => (
              <Category>{category}</Category>
            ))}
          </CategoriesContainer>
        </Wrapper>
        <Wrapper style={{ width: "20%" }}>
          <Title>Genders</Title>
          <CategoriesContainer>
            <Gender>Men</Gender>
            <Gender>Women</Gender>
          </CategoriesContainer>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper style={{ width: "40%" }}>
          <Title>Social Media</Title>
          <SocialMediaContainer>
            <Circle>
              <FaFacebookF style={{ fontSize: "20px" }} />
            </Circle>
            <Circle>
              <FaInstagram style={{ fontSize: "20px" }} />
            </Circle>
          </SocialMediaContainer>
        </Wrapper>
        <Wrapper style={{ fontSize: "80px", justifyContent: "flex-end" }}>
          <SiNike />
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
  );
}
