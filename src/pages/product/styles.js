import styled from "styled-components";
import { breakingPoints } from "../../global/breakingPoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
export const ProductContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakingPoints.md}px) {
    flex-direction: column;
    gap:40px
  }
@media (max-width: ${breakingPoints.sm}px) {
  flex-direction: column;
  }
`;