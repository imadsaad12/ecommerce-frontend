import styled from "styled-components";
import { breakingPoints, themecolors } from "../../../global/theme";

export const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
width: 90%;
flex-direction: column;
margin-top: 50px;
@media (max-width: ${breakingPoints.sm}px) {
    width: 80%;
    height: 60vh;
    margin-top: 30px;
    align-items: center;

  }
`;
export const Text = styled.span`
font-size: 30px;
font-weight: bold;
color:${themecolors.black};
@media (max-width: ${breakingPoints.sm}px) {
  font-size: 21px;
  }
`;

