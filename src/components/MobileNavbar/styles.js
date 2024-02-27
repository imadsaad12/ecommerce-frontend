import styled from "styled-components";
import { keyframes } from "styled-components";
import { CiMenuBurger } from "react-icons/ci";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  top: ${(props) => (props.isFadeIn ? "0" : "-11vh")};
  position: fixed;
  z-index: 10;
  transition: all 0.5s ease-in-out;


`;
export const Header = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.2px solid rgba(83, 83, 83, 0.1);
`;
export const Main = styled.div`
  width: 100%;
  height: 6vh;
  position: relative;
  display: flex;
  align-items: center;

`;
export const Logo = styled.span`
position: absolute;
left: 20px;
font-size: 16px;
`;

export const MenuBurger = styled(CiMenuBurger)`
  position: absolute;
  z-index: 1;
  right: 20px;
  font-size: 20px;
`;
