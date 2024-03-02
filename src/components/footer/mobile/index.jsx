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
  Logo
} from "./styles";
import { FaFacebookF, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { useGetCategoriesQuery } from "../../../apis/categories/getCategories";
import circlelogo from "../../../static/circlelogo.png"
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
            {categories?.slice(0, 2)?.map(({ category }) => (
              <Category>{category}</Category>
            ))}
            {categories?.length > 2 && <Category key="more">. . .</Category>}
          </CategoriesContainer>
        </Wrapper>
        <Wrapper style={{ width: "20%", alignSelf: "flex-start" }}>
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
        <Wrapper style={{ fontSize: "80px", alignSelf: "flex-end" }}>
          <Logo src={circlelogo} />
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
