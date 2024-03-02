import styled, { keyframes } from "styled-components";
import { breakingPoints, themecolors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: ${(props) => (props.isFadeIn ? "0" : "-14vh")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.navBackground == "transparent" ? "transparent" : themecolors.white};
  box-shadow: ${(props) =>
    props.navBackground == "transparent"
      ? "null"
      : "0 2px 4px rgba(0, 0, 0, 0.1)"};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  z-index: 10000;
  /* transition: top 1s ease-in-out; */
  height: 14vh;
  transition: all 0.5s ease-in-out;
`;
export const Header = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.navBackground == "transparent"
      ? `${themecolors.white}`
      : `${themecolors.black}`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.6;
  color: ${(props) =>
    props.navBackground == "transparent"
      ? `${themecolors.black}`
      : `${themecolors.white}`};
`;
export const NavMain = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
export const CategoriesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  height: 100%;
  flex: 1;
`;
export const CategoryUnderLine = styled.div`
  width: 0%;
  height: 2px;
  transition: all 0.4s ease-in-out;
  background-color: ${(props) =>
    props.navBackground == "transparent"
      ? `${themecolors.white}`
      : `${themecolors.black}`};
`;
const DropDownAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height:200px
  }
`;
export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${themecolors.white};
  width: 200px;
  height: 200px;
  display: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${DropDownAnimation} 0.5s ease-in-out;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  z-index: 10000;
  overflow: hidden;
`;
export const CategoryName = styled.span`
  cursor: pointer;
  font-size: 13px;
  text-transform: capitalize;
  color: ${themecolors.black};
  font-weight: bold;
`;

export const CategoryContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  &:hover ${CategoryUnderLine} {
    width: 100%;
  }
  &:hover ${DropDown} {
    display: flex;
  }
`;
export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
  color: ${(props) =>
    props.navBackground == "transparent"
      ? `${themecolors.white}`
      : `${themecolors.black}`};
  font-weight: bold;
`;


export const LogoContainer = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 140px;
  height: 50px;
`;

export const NavBtns = styled.div`
  background-color: ${themecolors.black};
`;

export const CartIconContainer = styled.div`
  width: 40px;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 55px;
    height: 55px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: ${themecolors.black};
    border-radius: 50%;
    bottom: 40px;
    right: 20px;
    z-index: 400;
  }
`;

export const NumberOfItems = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: ${themecolors.white};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
