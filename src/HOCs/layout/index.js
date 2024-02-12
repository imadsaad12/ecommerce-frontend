import React from "react";
import { Container } from "./styles";
import SideBar from "../../components/sideBar";

export default function Layout({ children }) {
  return (
    <Container>
      <SideBar />
      {children}
    </Container>
  );
}
