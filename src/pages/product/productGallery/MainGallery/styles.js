import styled from "styled-components";
import { breakingPoints } from "../../../../global/breakingPoints";

export const Container = styled.div`
width: 70%;
position: relative;
overflow: hidden;
@media (max-width: ${breakingPoints.md}px) {
  width: 100%;
  }

`;
export const Carousel = styled.div`
 display: block; 
  white-space: nowrap; 
  width: 100%;
transform: ${props=>`translateX(-${props.currentIndex * 100}%)`};
transition:all 1s ease-in-out;
height: 75vh;

`;
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

