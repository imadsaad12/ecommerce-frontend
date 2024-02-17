import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const inputStyle = (isSmallScreen) => ({
  width: isSmallScreen ? "90%" : "40%",
});

export const nameInputStyle = (isSmallScreen) => ({
  width: isSmallScreen ? "90%" : "calc(80% + 20px)",
});
