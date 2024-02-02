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
import { breakingPoints } from "../../global/breakingPoints";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import x from "../products/addProductForm/x.png";

export default function Orders() {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

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
      <Dialog
        open={true}
        style={{
          maxHeight: "600px",
          overflowY: "scroll",
        }}
      >
        <DialogContent dividers>
          <DialogTitle style={{ fontWeight: "bold" }}>
            Order details
          </DialogTitle>
          <Row>
            <Image src={x} />
            <Text>color</Text>
            <Text>size</Text>
            <Text>x2</Text>
          </Row>
          <Row>
            <Image src={x} />
            <Text>color</Text>
            <Text>size</Text>
            <Text>x2</Text>
          </Row>
          <ClientInfo>
            <InfoRow>
              <InfoKey>Client name :</InfoKey>
              <p>Imad saad</p>
            </InfoRow>
            <InfoRow>
              <InfoKey>Email : </InfoKey>
              <p>Imad.saad@gmail.com</p>
            </InfoRow>
            <InfoRow>
              <InfoKey>Phone number : </InfoKey>
              <p>+961 81113566</p>
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
                <p>Region</p>
                <p>Street</p>
                <p>Region</p>
              </div>
            </InfoRow>
          </ClientInfo>
        </DialogContent>
      </Dialog>
      <TableContainer>
        <TableHeader>
          <Title>Orders</Title>
        </TableHeader>
        <CustomizedTables
          addViewOrderButton={true}
          handleOnClickView={(id) => {
            console.log(id);
          }}
          tableData={[
            {
              id: 1,
              name: "asas",
              description: "asa",
              price: "20.00 USD",
              date: "20/1/2024",
            },
            {
              id: 2,
              name: "asas",
              description: "asa",
              price: "20.00 USD",
              date: "20/1/2024",
            },
            {
              id: 3,
              name: "asas",
              description: "asa",
              price: "20.00 USD",
              date: "20/1/2024",
            },
            {
              id: 4,
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
