import { styled } from "styled-components";
import { breakingPoints } from "../../../global/theme";

export const Container = styled.div`
  width: 25%;
  height: 410px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: ${breakingPoints.md}px) {
    width: 50%;
  }
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
`;

export const ColorSkeletonContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
