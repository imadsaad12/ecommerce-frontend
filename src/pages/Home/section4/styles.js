import styled, { keyframes } from "styled-components";
import { breakingPoints, themecolors } from "../../../global/theme";
import { AnimateCharacter } from "../styles";

export const Container = styled.div`
  height: 110vh;
  width: 90%;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakingPoints.sm}px) {
    height: 50vh;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  height: 80%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  @media (max-width: ${breakingPoints.sm}px) {
    position: absolute;
    right: 0;
    width: 50%;
    z-index: 3;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;
export const Button = styled.button`
  width: 100px;
  background-color: ${themecolors.white};
  color: ${themecolors.black};
  position: absolute;
  bottom: 20px;
  right: 40px;
  border-radius: 30px;
  outline: none;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0;
  font-weight: bold;
`;

export const LeftContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: ${breakingPoints.sm}px) {
    position: absolute;
    left: 0;
    width: 50%;
    z-index: 2;
  }
`;

export const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${themecolors.main};
  position: absolute;
  z-index: 2;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${themecolors.white};
  gap: 5px;
  z-index: 3;
  padding: 20px;
`;

const TitleAnimation = keyframes`
  from {
    letter-spacing: 50px;
    opacity: 0;
  }
  to {
    letter-spacing: 0px;
    opacity: 1;

  }
`;
const TitleAnimationMobile = keyframes`
  from {
    letter-spacing: 20px;
    opacity: 0;
  }
  to {
    letter-spacing: 0px;
    opacity: 1;

  }
`;
export const Title = styled.span`
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 0px;
  animation: 1s ${TitleAnimation} ease-in-out;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 25px;
    animation: 0.6s ${TitleAnimationMobile} ease-in-out;
  }
  color: ${themecolors.black};
  text-align: center;
`;

export const AnimatedWords = styled(AnimateCharacter)`
  font-size: 60px;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 30px;
  }
`;
