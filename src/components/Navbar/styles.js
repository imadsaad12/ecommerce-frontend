import styled from "styled-components";
import { keyframes } from 'styled-components';
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;
export const Header = styled.div`
width: 100%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
height: 5vh;
color: white;
`;
export const NavMain = styled.div`
width: 95%;
display: flex;
align-items: center;
justify-content: space-between;
height: 8vh;
`;
export const CategoriesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:15px;
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
`
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
  gap:10px;
  padding:20px
`;
export const CategoryName = styled.span`
cursor: pointer;
font-size:13px;

`;

export const CategoryContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  &:hover  ${CategoryUnderLine} {
    width: 100%; 
  }
  &:hover  ${DropDown} {
    display: flex;
  }
`;
export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;

export const Logo = styled.div`
color: black;
font-size: 20px;
`;

export const NavBtns = styled.div`
background-color: black;
`;
