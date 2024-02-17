import { styled } from "styled-components";
import { breakingPoints } from "../../../global/theme";

export const Container = styled.div`
  width: 30%;
  height: 60%;
  background-color: #f4f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1px;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 50%;
    height: 30%;
    margin-bottom: 10px;
    margin-top: -10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  color: gray;
  font-size: 18px;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 10px;
  }
`;

export const Divider = styled.div`
  margin-top: 10px;
  width: 65%;
  height: 1px;
  background-color: lightgray;
`;

export const TotalPrice = styled.p`
  font-weight: bold;
`;

export const buttonStyle = (isSmallScreen) => ({
  width: isSmallScreen ? "60%" : "65%",
  height: isSmallScreen ? "20px" : "12%",
  marginTop: isSmallScreen ? "8px" : "10%",
  backgroundColor: "green",
  fontSize: isSmallScreen ? "8px" : "15px",
});
