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
      // dispatch(addProducts(response.data));
      setProducts(response?.data);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isFetchingCategories) {
      const imageUrl = categoriesResponse?.data?.find(
        (elm) => elm.category === category && elm.type === type
      ).imageUrl;

      setCategoryImage(imageUrl);
    }
  }, [isFetchingCategories]);

  useEffect(() => {
    setIsLoadingCustomized(true);
    refetch()
      .then(({ data: { data } }) => {
        // dispatch(addProducts(data));
        setProducts(data);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      setIsLoadingCustomized(false);
    }, 500);
  }, [location.search]);

  return (
    <Container>
      <HeaderContainer>
        <Background
          src={`https://storage.googleapis.com/ecommerce-bucket-testing/${categoryImage}`}
        />
        <CategoryTitle>{category}</CategoryTitle>
      </HeaderContainer>
      <Wrapper>
        {isLoading || isLoadingCustomized ? (
          <>
            {Array.from({ length: isSmallScreen ? 5 : 10 }, () => {
              return <ProductSkeleton />;
            })}
          </>
        ) : (
          <>
            {products?.map((product) => {
              return <Product product={product} />;
            })}
          </>
        )}
      </Wrapper>
    </Container>
  );
}
