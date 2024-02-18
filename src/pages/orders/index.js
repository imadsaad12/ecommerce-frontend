import React, { useEffect, useState } from "react";
import {
  ClientInfo,
  Container,
  Image,
  InfoKey,
  InfoRow,
  Row,
  TableContainer,
  TableHeader,
  Text,
  Title,
} from "./styles";
import CustomizedTables from "../../components/table";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useGetOrdersQuery } from "../../apis/orders/getOrders";
import { formatRecentOrders } from "../../utilities/formatOrders";

export default function Orders() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [dialogData, setDialogData] = useState({});
  const [orders, setOrders] = useState({});
  const [formattedOrders, setFormattedOrders] = useState([]);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  const { response, isLoading } = useGetOrdersQuery();

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
      setOrders(response.data);
      setFormattedOrders(formatRecentOrders(response.data));
    }
  }, [isLoading]);

  return (
    <Container isOpen={isOpen}>
      <Dialog
        open={isPopupOpen}
        style={{
          maxHeight: "600px",
          overflowY: "scroll",
        }}
      >
        <DialogContent dividers>
          <DialogTitle style={{ fontWeight: "bold" }}>
            Order details
          </DialogTitle>
          {dialogData?.products?.map(
            ({ quantity, productImage, color, size }) => {
              return (
                <Row>
                  <Image
                    src={`https://storage.googleapis.com/ecommerce-bucket-testing/${productImage}`}
                  />
                  <Text>{color}</Text>
                  <Text>{size}</Text>
                  <Text>x{quantity}</Text>
                </Row>
              );
            }
          )}
          <ClientInfo>
            <InfoRow>
              <InfoKey>Client name :</InfoKey>
              <p>{dialogData.clientFullName}</p>
            </InfoRow>
            <InfoRow>
              <InfoKey>Email : </InfoKey>
              <p>{dialogData.email}</p>
            </InfoRow>
            <InfoRow>
              <InfoKey>Phone number : </InfoKey>
              <p>+961 {dialogData.phoneNumber}</p>
            </InfoRow>
            <InfoRow>
              <InfoKey>Address :</InfoKey>
              <div
                style={{
                  whiteSpace: "pre-line",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <p style={{ textTransform: "capitalize" }}>
                  {dialogData?.address?.region} , {dialogData?.address?.street}
                  -street
                </p>
                <p style={{ textTransform: "capitalize" }}>
                  {dialogData?.address?.building}-building ,{" "}
                  {dialogData?.address?.floor}-th floor
                </p>
              </div>
            </InfoRow>
          </ClientInfo>
          <DialogActions>
            <Button
              variant="contained"
              style={{ marginTop: "15px" }}
              onClick={() => setIsPopupOpen(false)}
            >
              close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <TableContainer>
        <TableHeader>
          <Title>Orders</Title>
        </TableHeader>
        <CustomizedTables
          addViewOrderButton={true}
          handleOnClickView={(id) => {
            setIsPopupOpen(true);
            setSelectedOrderId(id);
            const order = orders.find(({ uuid }) => uuid === id) || {};
            setDialogData(order);
          }}
          tableData={formattedOrders}
          tableHeaders={[
            { headerKey: "Client Name", headerValue: "clientFullName" },
            { headerKey: "Number Of Items", headerValue: "numberOfItems" },
            { headerKey: "Price ($)", headerValue: "totalPrice" },
            { headerKey: "Date", headerValue: "date" },
          ]}
        />
      </TableContainer>
    </Container>
  );
}
