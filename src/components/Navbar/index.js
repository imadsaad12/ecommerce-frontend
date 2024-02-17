import React, { useEffect, useState } from "react";
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
  CategoryName,
  CartIconContainer,
  NumberOfItems,
} from "./styles";
import { useGetCategoriesQuery } from "../../apis/categories/getCategories";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";

export default function Navbar({ isFadeIn }) {
  const { isLoading, response } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { products = [] } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!isLoading) {
      setCategories(response?.data);
    }
  }, [isLoading]);

  return (
    <Container isFadeIn={isFadeIn}>
      <Header>Delivery All Over Lebanon</Header>
      <NavMain>
        <CategoriesList>
          {["men", "women"].map((type) => {
            return (
              <CategoryContainer>
                <Category>{type}</Category>
                <CategoryUnderLine />
                <DropDown>
                  {categories
                    ?.filter((category) => category.type === type)
                    .map(({ category }) => {
                      return (
                        <CategoryName
                          onClick={() =>
                            navigate(`/?type=${type}&category=${category} `)
                          }
                        >
                          {category}
                        </CategoryName>
                      );
                    })}
                </DropDown>
              </CategoryContainer>
            );
          })}
        </CategoriesList>
        <Logo>POINT NUL</Logo>
        <CartIconContainer>
          {products?.length > 0 && (
            <NumberOfItems>{products.length}</NumberOfItems>
          )}
          <HiOutlineShoppingBag
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          />
        </CartIconContainer>
      </NavMain>
    </Container>
  );
}
