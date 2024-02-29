import styled from "styled-components";
import { themecolors } from "../../../../global/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const ColorName = styled.span`
  font-size: 16px;
  margin-right: 10px;
  width: 130px;
`;

export const SelectedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border-width: 1px;
  border: ${(props) =>
    props.color == props.selectedColor ? `1px solid ${themecolors.black}` : "transparent"};
`;

export const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.4s ease-in-out;
  background-color: ${(props) => props.color};
  border: ${({ color, selectedColor }) =>
    selectedColor === color && `1px solid ${themecolors.black}`};
  cursor: pointer;
`;
