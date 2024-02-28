import styled, { keyframes } from "styled-components";
import { breakingPoints } from "../../global/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const textclip = keyframes`
 to {
    background-position: 200% center;
  }
`;
export const AnimateCharacter = styled.h3`
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #000000 0%,
    #808080 29%,
    #d3d3d3 67%,
    #333333 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 5s linear infinite;
  display: inline-block;
  font-size: 30px;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 18px;
  }
`;
