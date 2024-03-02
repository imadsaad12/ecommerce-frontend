import React from "react";
import { Header, Container, Main, Logo, MenuBurger } from "./styles";
import logoDark from "../../static/logoDark.png";
import { useNavigate } from "react-router-dom";
export default function MobileNavbar({
  handleSidebar,
  navBackground,
  isFadeIn,
}) {
  const navigate = useNavigate();
  return (
    <Container navBackground={navBackground} isFadeIn={isFadeIn}>
      <Header>Delivery All over Lebanon</Header>
      <Main>
        <Logo src={logoDark} onClick={() => navigate("/")} />
        <MenuBurger onClick={handleSidebar} />
      </Main>
    </Container>
  );
}
