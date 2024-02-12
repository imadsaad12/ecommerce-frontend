import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
`;
export const SizeName = styled.span`
font-size: 16px;
margin-right: 10px;

`;

export const SizeContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
border: 1px solid ${props=>props.stock==0?"#D9D9D9":"black"};
background-color:${props=>props.size==props.selectedSize?"black":"transparent"} ;
color:${props=>props.size==props.selectedSize?"white":"black"} ;
position: relative;

`;

export const Size = styled.span`
font-size: 16px;

`;
export const OutOfStock = styled.div`
position: absolute;
width: 1px;
background-color: #D9D9D9;
rotate: 45deg;
height: 140%;

`;
