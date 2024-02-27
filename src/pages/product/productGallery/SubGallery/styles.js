import styled from "styled-components";
import { breakingPoints } from "../../../../global/theme";

export const Container = styled.div`
  height: 12vh;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: ${breakingPoints.md}px) {
    width: 100%;
  }
`;

export const ArrowContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const CarouselContainer = styled.div`
  width: 80%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Carousel = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  white-space: nowrap;
  transform: ${(props) => `translateX(-${props.SubGalleryIndex * 20}%)`};
  @media (max-width: ${breakingPoints.md}px) {
    transform: ${(props) => `translateX(-${props.SubGalleryIndex * 25}%)`};
  }
`;
export const ImageContainer = styled.div`
  width: 20%;
  height: 100%;
  display: inline-block; /* Display the containers inline */
  vertical-align: top; /* Align the containers at the top */

  @media (max-width: ${breakingPoints.md}px) {
    width: 25%;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.activeIndex == props.Index ? 1 : 0.5)};
  transition: all 0.2s ease-in-out;
`;
