import styled, { keyframes } from "styled-components";
import { breakingPoints, themecolors } from "../../../global/theme";

export const Container = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakingPoints.sm}px) {
    height: 30vh;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleAnimation = keyframes`
  0% {
    margin-top: 100px;
  }
  100% {
    margin-top: 0px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 50%;
  text-align: center;
  color: ${themecolors.white};
  z-index: 3;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 70%;
  }
`;
export const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  animation: 1s ${TitleAnimation} ease;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 20px;
  }
`;
export const SubTitle = styled.span`
  font-size: 25px;
  font-weight: normal;
  margin-top: 10px;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 12px;
    margin-top: 5px;
  }
  color: ${themecolors.white};
`;

export const Gradient = styled.span`
  font-size: 25px;
  font-weight: normal;
  background-image: linear-gradient(180deg, #000000, #a8c5c5);
  opacity: 0.4;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
