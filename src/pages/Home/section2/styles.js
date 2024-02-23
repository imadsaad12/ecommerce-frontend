import styled from "styled-components";
import { breakingPoints } from "../../../global/theme";

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
width: 90%;
@media (max-width: ${breakingPoints.sm}px) {
    width: 80%;
    height: 60vh;

  }
`;
