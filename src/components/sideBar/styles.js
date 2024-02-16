import styled from "styled-components";
import { breakingPoints } from "../../global/theme";

export const Container = styled.div`
  width: ${({ isOpen }) => (isOpen ? "300px" : "80px")};
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
  transition: all 0.3s ease;
  position: relative;
  @media (max-width: ${breakingPoints.sm}px) {
    width: ${({ isOpen }) => (isOpen ? "450px" : "80px")};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 100%;
  align-self: center;
  background-color: ${({ isActive }) => (isActive ? "#3f0097" : "white")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  &:hover {
    color: white;
    background-color: #3f0097;
    cursor: pointer;
  }
`;

export const Text = styled.div`
  font-size: 17px;
  margin-left: 20px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const iconStyle = { fontSize: 20, marginLeft: "20px" };
export const openCloseIconsStyles = {
  position: "absolute",
  right: "-10px",
  fontSize: "20px",
  top: "50%",
  color: "#3f0097",
  cursor: "pointer",
};
