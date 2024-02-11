import { styled } from "styled-components";
import { breakingPoints } from "../../../../global/breakingPoints";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 150px;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: whitesmoke;
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    margin-bottom: 15px;
    flex-wrap: nowrap;
  }
`;

export const fieldStyle = (isSmallScreen) => ({
  width: isSmallScreen ? "90%" : "20%",
  marginBottom: isSmallScreen ? "15px" : "5px",
  marginTop: isSmallScreen ? "5px" : "10px",
});

export const categoryButtonStyle = {
  width: "14%",
  textTransform: "capitalize",
  height: "55px",
};
