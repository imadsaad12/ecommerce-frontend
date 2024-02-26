import { styled } from "styled-components";
import { breakingPoints } from "../../../global/theme";

export const Container = styled.div`
  width: 80%;
  height: 70vh;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    height: 80vh;
    justify-content: space-around;
  }
`;

export const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const ColorSkeletonContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media (max-width: ${breakingPoints.sm}px) {
    gap: 5px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: ${breakingPoints.sm}px) {
    justify-content: flex-end;
    gap: 5px;
  }
`;
