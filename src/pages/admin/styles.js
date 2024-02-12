import styled from "styled-components";
import { breakingPoints } from "../../global/breakingPoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #dce5fd;
  overflow: hidden;
  filter: ${({ isOpen }) => isOpen && "blur(20px)"};
`;

export const StatisticsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export const Box = styled.div`
  width: 20%;
  height: 7em;
  border-radius: 5px;
  min-height: fit-content;
  background-color: #3f0097;
  box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  flex-direction: row;
  line-height: 1px;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 60%;
    height: 6em;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Text = styled.p`
  font-size: 1.3em;
  font-weight: bold;
`;
export const Number = styled.p`
  font-size: 17px;
  font-weight: 100;
`;

export const TableContainer = styled.div`
  width: 90%;
  height: 70vh;
  box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
  margin-bottom: 30px;
  background-color: white;
  border-radius: 25px;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 80%;
  }
`;

export const TableHeader = styled.div`
  height: 12%;
  border-bottom: 2px solid #3f0097;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  color: #8133ce;
  font-weight: bold;
  margin-left: 20px;
`;

export const IconContainer = styled.div`
  width: 30%;
`;
