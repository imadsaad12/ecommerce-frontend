import React from "react";
import {
  Container,
  DeliveryDetailsContainer,
  Divider,
  Row,
  TotalPrice,
  buttonStyle,
} from "./styles";
import { Button } from "@mui/material";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";
import { formatPrice } from "../../../utilities/formatPrice";

export default function Costs({ setIsFormOpen, totalPrice }) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  return (
    <Container>
      <Row>
        <p>Sub total</p>
        <p>{formatPrice(totalPrice)}</p>
      </Row>
      <Row>
        <p>Delivery</p>
        <DeliveryDetailsContainer>
          <p>$3 in beirut </p>
          <p>/</p>
          <p>$6 out of beirut</p>
        </DeliveryDetailsContainer>
      </Row>
      <Divider />
      <Row>
        <TotalPrice>Total</TotalPrice>
        <TotalPrice>{formatPrice(totalPrice)}$ + delivery</TotalPrice>
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
