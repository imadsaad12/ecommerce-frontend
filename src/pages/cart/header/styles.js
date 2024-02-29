import { styled } from "styled-components";
import { breakingPoints } from "../../../global/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 25vh;
  line-height: 1px;
  margin-top: 10vh;
  @media (max-width: ${breakingPoints.sm}px) {
    margin-top: 5vh;
  }
`;

export const Title = styled.p`
  font-size: 33px;
  font-family: Arial, Helvetica, sans;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 25px;
  }
`;
export const SubTitle = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 10px;
  }
`;

export const buttonStyle = {
  position: "absolute",
  top: "75px",
  left: "5px",
  color: "black",
};
