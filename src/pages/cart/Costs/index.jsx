import React from "react";
import { Container, Divider, Row, TotalPrice, buttonStyle } from "./styles";
import { Button } from "@mui/material";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";

export default function Costs({ data }) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const totalPrice = data.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);

  return (
    <Container>
      <Row>
        <p>Sub total</p>
        <p>{totalPrice}$</p>
      </Row>
      <Row>
        <p>Delivery</p>
        <p>3$</p>
      </Row>
      <Divider />
      <Row>
        <TotalPrice>Total</TotalPrice>
        <TotalPrice>{totalPrice + 3}$</TotalPrice>
      </Row>
      <Button variant="contained" style={buttonStyle(isSmallScreen)}>
        Purchase
      </Button>
    </Container>
  );
}
