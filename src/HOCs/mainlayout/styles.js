import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";

export const Wrapper = styled.div`
  padding-top: 60px;
`;
export const MenuBurger = styled(CiMenuBurger)`
position: fixed;
z-index: 1;
right: 20px;
top:40px;
font-size: 20px;
`;