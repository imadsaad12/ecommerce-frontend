import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
export const SizeName = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => (props.stock == 0 ? "#D9D9D9" : "black")};
  background-color: ${(props) =>
    props.size == props.selectedSize && props.availability
      ? "black"
      : "transparent"};
  color: ${(props) =>
    props.size == props.selectedSize && props.availability ? "white" : "black"};
  position: relative;
  cursor: ${({ availability }) => (availability ? "pointer" : "not-allowed")};
  border-radius: 5px;
`;

export const Size = styled.span`
  font-size: 16px;
  text-transform: capitalize;
`;
export const OutOfStock = styled.div`
  position: absolute;
  width: 1px;
  background-color: #d9d9d9;
  rotate: 45deg;
  height: 140%;
`;
