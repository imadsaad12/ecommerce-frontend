import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
 height: 0vh;
}
100% {
 height: 14vh;
}
`;

const fadeOut = keyframes`
0% {
 height: 14vh;
}
100% {
 height: 0vh;
}
`;

export const Container = styled.div`
  width: 100%;
  position:fixed ;
  top: ${props=>props.isFadeIn?"0":"-100px"};; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  /* animation-name: ${(props) => (props.isFadeIn ? fadeIn : fadeOut)}; */
  background-color: white;
  z-index: 10000;
  transition: all 1s ease-in-out;
  height: 14vh;
`;
export const Header = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
   flex: 0.6;
  color: white;
`;
export const NavMain = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex:1;
`;
export const CategoriesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100%;
`;
export const CategoryUnderLine = styled.div`
  width: 0%;
  height: 2px;
  background-color: black;
  transition: all 0.4s ease-in-out;
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
  background-color: white;
  width: 200px;
  height: 200px;
  display: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${DropDownAnimation} 0.5s ease-in-out;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  z-index: 10000;

`;
export const CategoryName = styled.span`
  cursor: pointer;
  font-size: 13px;
  text-transform: capitalize;
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
`;

export const Logo = styled.div`
  color: black;
  font-size: 20px;
`;

export const NavBtns = styled.div`
  background-color: black;
`;

export const CartIconContainer = styled.div`
  width: 40px;
  position: relative;
`;

export const NumberOfItems = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  background-color: red;
  width: 20px;
  height: 20px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
