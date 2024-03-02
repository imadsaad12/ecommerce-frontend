import styled from "styled-components";
import { themecolors } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${themecolors.black};
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Root = styled.div`
  width: 100%;
  height: 40vh;
  background-color: ${themecolors.black};;
  color: ${themecolors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Wrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
`;

export const Text = styled.p`
  font-size: 30px;
  color: ${themecolors.white};;
  font-weight: bold;
`;
export const Title = styled.p`
  font-size: 20px;
  color: ${themecolors.white};;
  font-weight: bold;
  align-self: flex-start;
`;
export const Logo = styled.img`
width:200px;
height:80px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-self: flex-start;
`;
export const Category = styled.li`
  font-size: 14px;
  text-transform: capitalize;
`;

export const Gender = styled(Category)``;

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9e9e9;
  color: black;
  &:hover {
    background-color: #2b2b2b;
    color: ${themecolors.white};;
    cursor: pointer;
    transition: all 0.5s;
  }
`;

export const PoweredBy = styled.pre`
  font-size: 15px;
  text-align: center;
  color: ${themecolors.white};;
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`;

export const Link = styled.a`
  color: ${themecolors.white};;
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`;
