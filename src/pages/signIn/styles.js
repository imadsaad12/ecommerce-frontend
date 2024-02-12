import styled from "styled-components";
import { breakingPoints } from "../../global/breakingPoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dce5fd;
`;

export const FormContainer = styled.div`
  width: 40%;
  height: 380px;
  box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 70%;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  height: 65%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  height: 30%;
  width: 80%;
  align-self: center;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 20px;
  }
`;
export const SubTitle = styled.p`
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 13px;
  }
`;

export const inputStyle = { width: "80%" };
