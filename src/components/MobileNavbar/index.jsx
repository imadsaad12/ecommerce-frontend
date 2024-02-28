import React from "react";
import { Header ,Container,Main,Logo,MenuBurger} from "./styles";

export default function MobileNavbar({handleSidebar,navBackground,isFadeIn}) {
  return (
    <Container navBackground={navBackground} isFadeIn={isFadeIn}>
      <Header>Delivery All over Lebanon</Header>
      <Main>
        <Logo>POINT NUL</Logo>
        <MenuBurger onClick={handleSidebar}/>
      </Main>
    </Container>
  );
}