import styled from "styled-components";
import { breakingPoints } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProductContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  min-height: 100vh;

  @media (max-width: ${breakingPoints.md}px) {
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
  }
`;
