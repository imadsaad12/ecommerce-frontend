import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  NavMain,
  CategoriesList,
  Category,
  Logo,
  CategoryContainer,
  CategoryUnderLine,
  DropDown,
  CategoryName,
  CartIconContainer,
  NumberOfItems,
  LogoContainer
} from "./styles";
import { useGetCategoriesQuery } from "../../apis/categories/getCategories";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../../redux/categories/categoriesActions";
import logoDark from "../../static/logoDark.png"
import logoLight from "../../static/logoLight.png"

export default function Navbar({ isFadeIn, navBackground }) {
  const { isLoading, response } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { products = [] } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      setCategories(response?.data);
      dispatch(addCategories(response?.data));
    }
  }, [isLoading]);

  return (
    <Container navBackground={navBackground} isFadeIn={isFadeIn}>
      <Header navBackground={navBackground}>Delivery All Over Lebanon</Header>
      <NavMain>
        <CategoriesList>
          {["men", "women"].map((type) => {
            return (
              <CategoryContainer>
                <Category navBackground={navBackground}>{type}</Category>
                <CategoryUnderLine navBackground={navBackground} />
                <DropDown>
                  {categories
                    ?.filter((category) => category.type === type)
                    ?.map(({ category }) => {
                      return (
                        <CategoryName
                          onClick={() =>
                            navigate(
                              `/products?type=${type}&category=${category} `
                            )
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
        <LogoContainer>
          <Logo src={navBackground=="nontransparent"?logoDark:logoLight}/>

        </LogoContainer>
        <CartIconContainer>
          {products?.length > 0 && (
            <NumberOfItems>{products.length}</NumberOfItems>
          )}
          <HiOutlineShoppingBag
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: navBackground == "transparent" ? "white" : "black",
            }}
            onClick={() => navigate("/cart")}
          />
        </CartIconContainer>
      </NavMain>
    </Container>
  );
}
