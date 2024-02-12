import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap:5px;
  align-items: center;
`;

export const ColorName = styled.span`
font-size: 16px;
margin-right: 10px;

`;

export const SelectedContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:17px;
height:17px;
border-radius: 50%;
border-width: 1px;
border: ${props=>props.color==props.selectedColor?"1px solid black":"transparent"};
`;

export const ColorCircle = styled.div`
width:14px;
height:14px;
border-radius: 50%;
background-color: ${props=>props.color};

`;
