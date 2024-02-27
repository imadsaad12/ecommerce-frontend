import styled, { keyframes } from "styled-components";
import { breakingPoints, themecolors } from "../../../global/theme";

export const Container = styled.div`
  height: 80vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakingPoints.sm}px) {
    height: 40vh;
  }
`;
export const LeftContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

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

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const TraitAnimation1 = keyframes`
  from {
    margin-right: 100px;
    opacity: 0;
  }
  to {
    margin-right: 0px;
    opacity: 1;

  }
`;
const TraitAnimation2 = keyframes`
  from {
    margin-left: 100px;
    opacity: 0;
  }
  to {
    margin-left: 0px;
    opacity: 1;

  }
`;
export const TraitContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
  &:nth-child(1) {
    animation: 1s ${TraitAnimation1} ease-in-out;
  }
  &:nth-child(2) {
    animation: 1s ${TraitAnimation2} ease-in-out;
  }
`;

export const TopTrait = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  width: 50%;
`;
export const TraitTextTop = styled.span`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 15px;
  }
  color:${themecolors.black}
`;
export const TraitTextBottom = styled.span`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  color:${themecolors.black};
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 15px;
  }
`;
export const Line = styled.span`
  height: 6px;
  width: 100%;
  background-color:${themecolors.main};
  position: absolute;
`;
export const BottomTrait = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  color:${themecolors.black};
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 13px;
    width: 80%;
  }
`;
