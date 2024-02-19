import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap:5px;
  align-items: center;
  margin-top:10px;
`;

export const ColorName = styled.span`
font-size: 16px;
margin-right: 10px;

`;

export const ColorContainer = styled.span`
display: flex;
width:27px;
height:27px;
position: relative;
align-items: center;
justify-content: center;
`;
export const SelectedContainer = styled.span`
position: absolute;
width:24px;
height:24px;
border-radius: 50%;
border-width: 1px;
border: ${props=>props.color==props.selectedColor?`2px solid ${props.color}`:"transparent"};
`;

export const ColorCircle = styled.span`
position: absolute;
width:20px;
height:20px;
border-radius: 50%;
background-color: ${props=>props.color};
cursor: pointer;
`;
