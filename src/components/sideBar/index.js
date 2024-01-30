import React from "react";
import { Container, Row, Text, iconStyle } from "./styles";
import { MdSpaceDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const isActive = (url) => url === window.location.pathname;

  const menuItems = [
    {
      url: "/admin",
      text: "Dashboard",
      Icon: MdSpaceDashboard,
    },
    {
      url: "/admin/products",
      text: "Products",
      Icon: FiShoppingBag,
    },
    {
      url: "/admin/orders",
      text: "Orders",
      Icon: MdOutlineShoppingCart,
    },
    {
      url: "/",
      text: "Log out",
      Icon: SlLogout,
    },
  ];

  return (
    <Container>
      {menuItems.map(({ url, text, Icon }) => {
        return (
          <Row onClick={() => navigate(url)} isActive={isActive(url)}>
            <Icon style={iconStyle} />
            <Text>{text}</Text>
          </Row>
        );
      })}
    </Container>
  );
}
