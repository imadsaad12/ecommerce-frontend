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
import { useGetOrdersQuery } from "../../apis/orders/getOrders";
import { formatRecentOrders } from "../../utilities/formatOrders";
import { useGetStatisticsQuery } from "../../apis/orders/getStatistics";
import { CircularProgress } from "@mui/material";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const [orders, setOrders] = useState([]);
  const [statistics, setStatistics] = useState({});

  const { isLoading, response } = useGetOrdersQuery(1);
  const { isLoading: isFetchingStatistics, response: statisticsData } =
    useGetStatisticsQuery();

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

  useEffect(() => {
    if (!isLoading) {
      setOrders(formatRecentOrders(response?.data));
    }
    if (!isFetchingStatistics) {
      setStatistics(statisticsData?.data);
    }
  }, [isLoading, isFetchingStatistics]);

  return (
    <>
      {isLoading || isFetchingStatistics ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress size={150} style={{ alignSelf: "center" }} />
        </div>
      ) : (
        <Container isOpen={isOpen}>
          <StatisticsContainer>
            <Box>
              <BoxContent>
                <Text>Products</Text>
                <Number>{statistics?.numberOfProducts || 0}</Number>
              </BoxContent>
              <IconContainer>
                <FiShoppingBag color="white" style={{ fontSize: "3em" }} />
              </IconContainer>
            </Box>
            <Box>
              <BoxContent>
                <Text>Orders</Text>
                <Number>{statistics?.numberOfOrders || 0}</Number>
              </BoxContent>
              <IconContainer>
                <MdOutlineShoppingCart
                  color="white"
                  style={{ fontSize: "3em" }}
                />
              </IconContainer>
            </Box>
            <Box>
              <BoxContent>
                <Text>Profits</Text>
                <Number>{statistics?.profits || 0} USD</Number>
              </BoxContent>
              <IconContainer>
                <GiTwoCoins color="white" style={{ fontSize: "3em" }} />
              </IconContainer>
            </Box>
          </StatisticsContainer>
          <TableContainer>
            <TableHeader>
              <Title>Recent Orders</Title>
            </TableHeader>
            <CustomizedTables
              tableData={orders}
              tableHeaders={[
                { headerKey: "Client Name", headerValue: "clientFullName" },
                { headerKey: "Number Of Items", headerValue: "numberOfItems" },
                { headerKey: "Price", headerValue: "totalPrice" },
                { headerKey: "Date", headerValue: "date" },
              ]}
            />
          </TableContainer>
        </Container>
      )}
    </>
  );
}
