import React, { useState } from "react";
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
} from "./styles";

import { categories } from "./data";
export default function MainSidebar({ sideOpen, handleSidebar }) {
  const uniqueTypes = Array.from(new Set(categories.map((item) => item.type)));
  const [activeTypes, setactiveTypes] = useState([]);
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
    <Container sideOpen={sideOpen}>
      <CloseIcon onClick={closeHandle} />
      <LogoContainer>POINT NUL</LogoContainer>
      {uniqueTypes.map((type) => {
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
                .filter((category) => category.type === type)
                .map((category) => {
                  return <CategoryName>{category.category}</CategoryName>;
                })}
            </SubCategories>
          </Tab>
        );
      })}
    </Container>
  );
}
