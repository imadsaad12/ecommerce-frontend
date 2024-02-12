import React, { useState } from "react";
import {
  Container,
  Row,
  Text,
  iconStyle,
  openCloseIconsStyles,
} from "./styles";
import { MdSpaceDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useLogOutQuery } from "../../apis/auth/logOut";

export default function SideBar() {
  const navigate = useNavigate();
  const isActive = (url) => url === window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const { handleApiCall, isPending } = useLogOutQuery({ onSuccess });
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
  ];

  const handleLogout = () => handleApiCall();

  function onSuccess() {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  }

  return (
    <Container isOpen={isOpen} id="side-bar">
      {!isOpen ? (
        <FaChevronCircleRight
          onClick={() => setIsOpen(!isOpen)}
          style={openCloseIconsStyles}
        />
      ) : (
        <FaChevronCircleLeft
          onClick={() => setIsOpen(!isOpen)}
          style={openCloseIconsStyles}
        />
      )}

      {menuItems.map(({ url, text, Icon }) => {
        return (
          <Row onClick={() => navigate(url)} isActive={isActive(url)}>
            <Icon style={iconStyle} />
            <Text isOpen={isOpen}>{text}</Text>
          </Row>
        );
      })}
      <Row onClick={handleLogout}>
        <SlLogout style={iconStyle} />
        <Text isOpen={isOpen}>Log out</Text>
      </Row>
    </Container>
  );
}
