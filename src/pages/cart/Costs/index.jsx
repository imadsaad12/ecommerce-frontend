import React from "react";
import { Container, Divider, Row, TotalPrice, buttonStyle } from "./styles";
import { Button } from "@mui/material";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";
import { formatOrder } from "../../../utilities/formatOrders";
import { useAddOrderQuery } from "../../../apis/orders/addOrder";

export default function Costs({ setIsFormOpen, totalPrice }) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  const { handleApiCall, isPending } = useAddOrderQuery({
    onSuccess: () => {},
  });

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
      <Button
        variant="contained"
        style={buttonStyle(isSmallScreen)}
        onClick={() => setIsFormOpen(true)}
      >
        Purchase
      </Button>
    </Container>
  );
}
