import React from "react";
import { Container, SubTitle, Title, buttonStyle } from "./styles";
import { breakingPoints } from "../../../global/theme";
import useBreakpoint from "../../../utilities/mediaQuery";
import { Button } from "@mui/material";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Header({ isFormOpen, setIsFormOpen }) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  return (
    <Container style={{ position: "relative" }}>
      {isFormOpen && isSmallScreen && (
        <Button
          startIcon={<FaArrowLeftLong />}
          style={buttonStyle}
          onClick={() => setIsFormOpen(false)}
        />
      )}
      {isFormOpen && !isSmallScreen && (
        <Button
          startIcon={<FaArrowLeftLong />}
          style={{
            position: "absolute",
            top: "35%",
            left: "20%",
            color: "black",
          }}
          onClick={() => setIsFormOpen(false)}
        />
      )}
      <Title>{isFormOpen ? "Address Information" : "Shopping Cart"}</Title>
      <SubTitle>
        {isFormOpen ? "Cart / Address Form" : "Home / Shopping Cart"}{" "}
      </SubTitle>
    </Container>
  );
}
