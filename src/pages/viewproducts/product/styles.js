import styled from "styled-components";
import { breakingPoints } from "../../../global/breakingPoints";

export const Container = styled.div`
width: 25%;
display: flex;
align-items: center;
justify-content: center;
margin-top:30px;
@media (max-width: ${breakingPoints.md}px) {
    width: 50%;
  }
@media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const Wrapper =styled.div`
width: 85%;
display: flex;
justify-content: center;
flex-direction: column;
gap:3px
`;

export const Image =styled.img`
width: 100%;
height: 50vh;
`;
export const Name =styled.span`
font-size:15px;
font-weight: bold;
`;
export const Price =styled.span`
font-size:15px;
font-weight: normal;
`;
