import React from "react";
import { Header ,Container,Main,Logo,MenuBurger} from "./styles";
import logoDark from "../../static/logoDark.png"
export default function MobileNavbar({handleSidebar,navBackground,isFadeIn}) {
  return (
    <Container navBackground={navBackground} isFadeIn={isFadeIn}>
      <Header>Delivery All over Lebanon</Header>
      <Main>
        <Logo src={logoDark}/>
        <MenuBurger onClick={handleSidebar}/>
      </Main>
    </Container>
  );
}
