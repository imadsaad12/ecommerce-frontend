import styled from "styled-components";
import { themecolors } from "../../global/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  padding-bottom: 40px;
`;

export const HeaderContainer = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Background = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`;
export const CategoryTitle = styled.span`
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  color :${themecolors.white};
  text-transform: capitalize;
`;
