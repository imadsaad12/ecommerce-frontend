import styled from "styled-components";
import { breakingPoints } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dce5fd;
  overflow: hidden;
  filter: ${({ isOpen }) => isOpen && "blur(20px)"};
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

export const Row = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 18px;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

export const ClientInfo = styled.div`
  min-width: 500px;
  border-top: 1px solid lightgray;
  line-height: 1px;
`;

export const InfoRow = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const InfoKey = styled.p`
  font-weight: bold;
`;
