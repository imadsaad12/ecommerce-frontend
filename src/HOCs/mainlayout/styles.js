import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { themecolors } from "../../global/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */
`;
export const MenuBurger = styled(CiMenuBurger)`
  position: fixed;
  z-index: 1;
  right: 20px;
  top: 40px;
  font-size: 20px;
`;
