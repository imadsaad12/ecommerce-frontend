import { styled } from "styled-components";
import { breakingPoints } from "../../../global/theme";

export const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgray;
  overflow-y: scroll;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: transparent transparent; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  /* Hide the scrollbar for WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  margin-top: 45px;
  @media (max-width: ${breakingPoints.sm}px) {
    height: 50px;
    margin-top: 60px;
  }
`;

export const ImageAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.img`
  width: 124px;
  height: 187px;
  border-radius: 5px;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 58px;
    height: 87px;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media (max-width: ${breakingPoints.sm}px) {
    height: 100px;
    width: 100px;
  }
`;

export const ProductName = styled.p`
  font-size: 15px;
  font-weight: 600;
  font-family: sans-serif;
  text-transform: uppercase;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 10px;
  }
`;

export const QuantityContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Quantity = styled.div`
  width: 31px;
  height: 50px;
  border-radius: 50px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 20px;
    height: 35px;
    font-size: 13px;
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-around;
`;

export const DescriptionContainer = styled.div`
  line-height: 15px;
  text-transform: capitalize;

  @media (max-width: ${breakingPoints.sm}px) {
    line-height: 1px;
    font-size: 10px;
  }
`;

export const TotalPrice = styled.p`
  font-size: 20px;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 10px;
  }
`;

export const QuantitySmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
