import React, { useEffect, useState } from "react";
import {
  Container,
  LogoContainer,
  TypeContainer,
  Type,
  SubCategories,
  Tab,
  CategoryName,
  StyledArrow,
  TypeWrapper,
  CloseIcon,
  Logo
} from "./styles";

import { useGetCategoriesQuery } from "../../apis/categories/getCategories";
import { useNavigate } from "react-router-dom";
import logoDark from "../../static/logoDark.png"
export default function MainSidebar({ sideOpen, handleSidebar }) {
  const [activeTypes, setactiveTypes] = useState([]);
  const { isLoading, response } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      setCategories(response?.data);
    }
  }, [isLoading]);

  const handleType = (type) => {
    if (activeTypes.includes(type)) {
      let filteredArray = activeTypes.filter((item) => item !== type);
      setactiveTypes(filteredArray);
    } else {
      setactiveTypes((array) => [...array, type]);
    }
  };

  const closeHandle = () => {
    handleSidebar();
  };

  return (
    <>
      <Container sideOpen={sideOpen}>
        <CloseIcon onClick={closeHandle} />
        <LogoContainer>
          <Logo src={logoDark}/>
        </LogoContainer>
        {["men", "women"].map((type) => {
          return (
            <Tab>
              <TypeContainer
                onClick={() => {
                  handleType(type);
                }}
              >
                <TypeWrapper>
                  <Type>{type}</Type>
                  <StyledArrow activeTypes={activeTypes} type={type} />
                </TypeWrapper>
              </TypeContainer>
              <SubCategories activeTypes={activeTypes} type={type}>
                {categories
                  ?.filter((category) => category.type === type)
                  ?.map(({ category }) => {
                    return (
                      <CategoryName
                        onClick={() => {
                          navigate(
                            `/products?type=${type}&category=${category} `
                          );
                          closeHandle();
                        }}
                      >
                        {category}
                      </CategoryName>
                    );
                  })}
              </SubCategories>
            </Tab>
          );
        })}
      </Container>
    </>
  );
}
