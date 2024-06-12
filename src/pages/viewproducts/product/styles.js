import styled from "styled-components";
import { breakingPoints, themecolors } from "../../../global/theme";

export const Container = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: ${breakingPoints.md}px) {
    width: 50%;
  }
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
  border-radius:20px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover{
    transform: scale(1.3);
  }
  object-fit: cover;
`;
export const Name = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-top:4px;
  color :${themecolors.black}
`;



export const PriceContainer = styled.div`
display: flex;
flex-direction: row;
gap:10px


`;
export const Price = styled.span`
  font-size: 18px;
  font-weight: normal;
  color :${themecolors.black};
  text-decoration-line:${props=>props.sale?"line-through":"null"};

`;

export const DiscountPrice = styled.span`
  font-size: 18px;
  font-weight: normal;
  color :${themecolors.black}

`;

export const Sale = styled.span`
  font-size: 11px;
  font-weight: normal;
  background-color: red;
  color :${themecolors.white};
  border-radius:10px;
  width: 70px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;

`;
