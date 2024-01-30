import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #dce5fd;
`;

export const StatisticsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

export const Box = styled.div`
  width: 20%;
  height: 7em;
  border-radius: 5px;
  background-color: #3f0097;
  box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const Number = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
