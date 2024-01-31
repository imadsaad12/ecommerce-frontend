import React, { useEffect, useState } from "react";
import {
  Box,
  BoxContent,
  Container,
  IconContainer,
  Number,
  StatisticsContainer,
  TableContainer,
  TableHeader,
  Text,
  Title,
} from "./styles";
import CustomizedTables from "../../components/table";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/breakingPoints";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const boxes = [
    { title: "Products", number: "20", Icon: FiShoppingBag },
    { title: "Orders", number: "20", Icon: MdOutlineShoppingCart },
    { title: "Profits", number: "1,000 USD", Icon: GiTwoCoins },
  ];

  useEffect(() => {
    const observeSizeChanges = () => {
      const targetElement = document.getElementById("side-bar");

      if (!targetElement) return;

      const resizeObserver = new ResizeObserver(() => {
        const divWidth = targetElement.offsetWidth;

        setIsOpen(divWidth > 100 && isSmallScreen);
      });

      resizeObserver.observe(targetElement);

      return () => {
        resizeObserver.disconnect();
      };
    };

    observeSizeChanges();
  }, [setIsOpen]);

  return (
    <Container isOpen={isOpen}>
      <StatisticsContainer>
        {boxes.map(({ title, number, Icon }) => {
          return (
            <Box>
              <BoxContent>
                <Text>{title}</Text>
                <Number>{number}</Number>
              </BoxContent>
              <IconContainer>
                <Icon color="white" style={{ fontSize: "3em" }} />
              </IconContainer>
            </Box>
          );
        })}
      </StatisticsContainer>
      <TableContainer>
        <TableHeader>
          <Title>Recent Orders</Title>
        </TableHeader>
        <CustomizedTables
          tableData={[
            {
              name: "asas",
              description: "asa",
              price: "20.00 USD",
              date: "20/1/2024",
            },
            {
              name: "asas",
              description: "asa",
              price: "20.00 USD",
              date: "20/1/2024",
            },
            {
              name: "asas",
              description: "asa",
              price: "20.00 USD",
              date: "20/1/2024",
            },
            {
              name: "asas",
              description: "asa",
              price: "20.00 USD",
              date: "20/1/2024",
            },
          ]}
          tableHeaders={[
            { headerKey: "Name", headerValue: "name" },
            { headerKey: "Description", headerValue: "description" },
            { headerKey: "Price", headerValue: "price" },
            { headerKey: "Date", headerValue: "date" },
          ]}
        />
      </TableContainer>
    </Container>
  );
}
