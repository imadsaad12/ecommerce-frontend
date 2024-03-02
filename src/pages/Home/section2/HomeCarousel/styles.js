import styled from "styled-components";
import { breakingPoints } from "../../../../global/theme";
import { themecolors } from "../../../../global/theme";
export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 100px;
  @media (max-width: ${breakingPoints.sm}px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

`;
export const CarouselContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transform: ${(props) => `translateX(-${props.carouselIndex * 25}%)`};
  transition: all 1s ease-in-out;
  @media (max-width: ${breakingPoints.md}px) {
    transform: ${(props) => `translateX(-${props.carouselIndex * 100}%)`};
  }
`;
export const ArrowContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${themecolors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
  top: 35%;
  z-index: 1;
  color:${themecolors.black};
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  width: 25%;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  @media (max-width: ${breakingPoints.md}px) {
    width: 100%;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Product = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 80%;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 60vh;
  border-radius: 40px;
  @media (max-width: ${breakingPoints.sm}px) {
    height: 38vh;
  }
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
  object-fit: cover;
`;

export const Details = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 6px;
`;

export const Name = styled.span`
  font-size: 15px;
  font-weight: bold;
  color:${themecolors.black}
`;
export const Price = styled.span`
  font-size: 15px;
  color:${themecolors.black}

`;
