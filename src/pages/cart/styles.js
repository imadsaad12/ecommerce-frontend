import { styled } from "styled-components";
import { breakingPoints } from "../../global/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction:column;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 80vh;
  gap: 10%;
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
  }
`;
