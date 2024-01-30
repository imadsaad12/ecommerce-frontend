import styled from "styled-components";

export const Container = styled.div`
  width: 230px;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
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
`;

export const iconStyle = { fontSize: 20, marginLeft: "20px" };
