import styled from "styled-components";
import { keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { themecolors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  right: ${(props) => (props.sideOpen ? "0%" : "-100%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  transition: all 0.5s ease-in-out;
  background-color: ${themecolors.white};
  z-index: 12;

`;
export const LogoContainer = styled.div`
  width: 80%;
  color: ${themecolors.black};
  font-size: 35px;
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Tab = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
`;
export const Type = styled.div`
  color:  ${themecolors.black};;
  width: 60px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const SubCategories = styled.div`
  width: 90%;
  color:  ${themecolors.black};;
  overflow: hidden;
  margin-top: 10px;
  max-height: ${(props) =>
    props.activeTypes.includes(props.type) ? "1000px" : "0px"};
  transition: all 0.7s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TypeContainer = styled.div`
  width: 100%;
`;
export const TypeWrapper = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;
export const CategoryName = styled.span`
  font-size: 16px;
  text-transform: capitalize;
`;

export const StyledArrow = styled(IoIosArrowDown)`
  transform: ${(props) =>
    props.activeTypes.includes(props.type) ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all 0.6s ease-in-out;
`;
export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  right: 20px;
  top: 40px;
  font-size: 20px;
  color: ${themecolors.black};
`;
