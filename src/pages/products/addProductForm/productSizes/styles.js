import { styled } from "styled-components";
import { breakingPoints } from "../../../../global/breakingPoints";

export const SizesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  background-color: whitesmoke;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: ${breakingPoints.sm}px) {
    border: 1px solid lightgray;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;
export const SizesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: whitesmoke;
  align-items: center;
  min-height: 150px;
`;

export const fieldStyle = (isSmallScreen) => ({
  width: isSmallScreen ? "90%" : "25%",
  marginTop: "15px",
  marginBottom: "15px",
});

export const buttonStyle = (isSmallScreen) => ({
  height: "55px",
  width: isSmallScreen ? "90%" : "10%",
  marginBottom: isSmallScreen && "15px",
});

export const ColorRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Color = styled.div`
  background-color: ${({ color }) => color};
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;
