import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

export const Name = styled.span`
  font-size: 30px;
  /* font-size: 25px; */
  font-weight: bold;
  text-transform: capitalize;
`;
export const Price = styled.span`
  font-size: 25px;
  font-weight: normal;
`;

export const Description = styled.span`
  font-size: 18px;
  /* font-size: 16px; */
  font-weight: light;
`;
export const QuantityPurchase = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
export const Quantity = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 30px;
  border-radius: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;
export const AddtoCart = styled.button`
  width: 150px;
  border-radius: 20px;
  background-color: ${({ isDisabled }) => (isDisabled ? "lightgray" : "black")};
  color: white;
  height: 40px;
  outline: none;
  border: none;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
`;

export const addToCartStyle = (isDisabled) => ({
  textTransform: "capitalize",
  backgroundColor: "black",
  color: "white",
  borderRadius: "10px",
  width: "140px",
  height: "40px",
  backgroundColor: isDisabled ? "lightgray" : "black",
  cursor: isDisabled ? "not-allowed" : "pointer",
});
