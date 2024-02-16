import React from "react";
import Skeleton from "react-loading-skeleton";
import { ColorSkeletonContainer, Container, Wrapper } from "./styles";

export default function ProductSkeleton() {
  return (
    <Container>
      <Wrapper>
        <Skeleton duration={1} height={"345px"} width={"100%"} />
        <Skeleton duration={1} height={"20px"} width={"50%"} />
        <ColorSkeletonContainer>
          <Skeleton
            duration={1}
            height={"20px"}
            width={"20px"}
            style={{ borderRadius: "50%" }}
          />
          <Skeleton
            duration={1}
            height={"20px"}
            width={"20px"}
            style={{ borderRadius: "50%" }}
          />
        </ColorSkeletonContainer>
      </Wrapper>
    </Container>
  );
}
