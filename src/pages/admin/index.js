import React from "react";
import { Box, Container, Number, StatisticsContainer, Text } from "./styles";

export default function Admin() {
  return (
    <Container>
      <StatisticsContainer>
        <Box>
          <Text>Products</Text>
          <Number>20</Number>
        </Box>
        <Box>
          <Text>Orders</Text>
          <Number>20</Number>
        </Box>
        <Box>
          <Text>Orders Last Month</Text>
          <Number>20</Number>
        </Box>
      </StatisticsContainer>
    </Container>
  );
}
