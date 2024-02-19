import { styled } from "styled-components";
import { breakingPoints } from "../../global/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10vh;
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    margin-top: 3vh;
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

export const Message = styled.p`
  font-size: 30px;
  color: gray;
  margin-top: 10%;
  font-weight: bold;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 18px;
  }
`;
