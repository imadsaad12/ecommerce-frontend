import React from "react";
import Skeleton from "react-loading-skeleton";
import { CarouselContainer, Container, Wrapper } from "./styles";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";

export default function ProductDetailsSkeleton() {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  return (
    <Container>
      <Wrapper>
        <Skeleton
          duration={1}
          height={isSmallScreen ? "350px" : "450px"}
          width={isSmallScreen ? "100%" : "90%"}
        />
        <CarouselContainer>
          <Skeleton
            duration={1}
            height={isSmallScreen ? "50px" : "80px"}
            width={isSmallScreen ? "50px" : "80px"}
          />
          <Skeleton
            duration={1}
            height={isSmallScreen ? "50px" : "80px"}
            width={isSmallScreen ? "50px" : "80px"}
          />
          <Skeleton
            duration={1}
            height={isSmallScreen ? "50px" : "80px"}
            width={isSmallScreen ? "50px" : "80px"}
          />
          <Skeleton
            duration={1}
            height={isSmallScreen ? "50px" : "80px"}
            width={isSmallScreen ? "50px" : "80px"}
          />
        </CarouselContainer>
      </Wrapper>
      {isSmallScreen ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Skeleton duration={1} height={"20px"} width={"300px"} />
          <Skeleton duration={1} height={"20px"} width={"150px"} />
          <Skeleton duration={1} height={"20px"} width={"200px"} />
        </div>
      ) : (
        <Wrapper style={{ width: "50%", gap: "20px" }}>
          <Skeleton duration={1} height={"20px"} width={"600px"} />
          <Skeleton duration={1} height={"20px"} width={"400px"} />
          <Skeleton duration={1} height={"20px"} width={"500px"} />
          <Skeleton duration={1} height={"20px"} width={"200px"} />
          <Skeleton duration={1} height={"20px"} width={"350px"} />
          <Skeleton duration={1} height={"20px"} width={"400px"} />
          <Skeleton duration={1} height={"20px"} width={"150px"} />
          <Skeleton duration={1} height={"20px"} width={"550px"} />
        </Wrapper>
      )}
    </Container>
  );
}
