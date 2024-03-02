import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  HeaderContainer,
  Background,
  CategoryTitle,
} from "./styles";
import Product from "./product";
import { useGetProductsQuery } from "../../apis/products/getProducts";
import ProductSkeleton from "./skeleteon";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/products/productsActions";
import { useGetCategoriesQuery } from "../../apis/categories/getCategories";
import menBackgroundImage from "../Home/section3/men.jpg";
import womenBackgroundImage from "../Home/section4/women.jpg";

export default function ViewProducts() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const [categoryImage, setCategoryImage] = useState("");
  const { response: categoriesResponse, isLoading: isFetchingCategories } =
    useGetCategoriesQuery();

  const type = queryParams.get("type");
  const category = queryParams.get("category");

  const { response, isLoading, refetch } = useGetProductsQuery({
    type,
    category,
  });
  const [isLoadingCustomized, setIsLoadingCustomized] = useState(isLoading);

  const [products, setProducts] = useState([]);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  useEffect(() => {
    if (!isLoading) {
      setProducts(response?.data);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isFetchingCategories) {
      let imageUrl;
      if (category === "*") {
        if (type === "men") imageUrl = menBackgroundImage;
        else imageUrl = womenBackgroundImage;
      } else {
        imageUrl = categoriesResponse?.data?.find(
          (elm) => elm.category === category && elm.type === type
        ).imageUrl;
      }

      setCategoryImage(imageUrl);
    }
  }, [isFetchingCategories, location.search]);

  useEffect(() => {
    setIsLoadingCustomized(true);
    refetch()
      .then(({ data: { data } }) => {
        setProducts(data);
        setIsLoadingCustomized(false);
      })
      .catch((err) => console.log(err));
  }, [location.search]);

  return (
    <Container>
      <HeaderContainer>
        <Background
          src={
            category === "*"
              ? categoryImage
              : `https://storage.googleapis.com/ecommerce-bucket-testing/${categoryImage}`
          }
        />
        <CategoryTitle>{category === "*" ? "Men" : category}</CategoryTitle>
      </HeaderContainer>
      <Wrapper>
        {!isLoading && !isLoadingCustomized ? (
          <>
            {products?.map((product) => {
              return <Product product={product} />;
            })}
          </>
        ) : (
          <>
            {Array.from({ length: isSmallScreen ? 5 : 10 }, () => {
              return <ProductSkeleton />;
            })}
          </>
        )}
      </Wrapper>
    </Container>
  );
}
