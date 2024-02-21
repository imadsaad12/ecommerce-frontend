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
} from "./styles";

// import { categories } from "./data";
import { useGetCategoriesQuery } from "../../apis/categories/getCategories";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartIconContainer, NumberOfItems } from "../Navbar/styles";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function MainSidebar({ sideOpen, handleSidebar }) {
  const [activeTypes, setactiveTypes] = useState([]);
  const { isLoading, response } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);
  const [reachedBottom, setReachedBottom] = useState(true);
  const { products = [] } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const isCartPage = window.location.pathname === "/cart";

  useEffect(() => {
    if (!isLoading) {
      setCategories(response?.data);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (windowHeight + scrollTop >= documentHeight - 200) {
        setReachedBottom(true);
      } else {
        setReachedBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {!reachedBottom && !isCartPage && (
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
      <Container sideOpen={sideOpen}>
        <CloseIcon onClick={closeHandle} />
        <LogoContainer>POINT NUL</LogoContainer>
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
                          navigate(`/?type=${type}&category=${category} `);
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
