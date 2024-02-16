import React from "react";
import {
  Container,
  Header,
  NavMain,
  CategoriesList,
  Category,
  Logo,
  NavBtns,
  CategoryContainer,
  CategoryUnderLine,
  DropDown,
  CategoryName
} from "./styles";
import { categories } from "./data";
export default function Navbar() {
  const uniqueTypes = Array.from(new Set(categories.map((item) => item.type)));
  return (
    <Container>
      <Header>Delivery All Over Lebanon</Header>
      <NavMain>
        <CategoriesList>
          {uniqueTypes.map((type) => {
            return (
              <CategoryContainer>
                <Category>{type}</Category>
                <CategoryUnderLine />
                <DropDown>{categories.filter(category => category.type === type).map((category)=>{
                    return <CategoryName>{category.category}</CategoryName>
                })}</DropDown>
              </CategoryContainer>
            );
          })}
        </CategoriesList>
        <Logo>POINT NUL</Logo>
        <NavBtns>Logo</NavBtns>
      </NavMain>
    </Container>
  );
}
