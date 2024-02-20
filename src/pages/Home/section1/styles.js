import styled from "styled-components";
import { breakingPoints } from "../../../global/theme";

export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;
export const Image = styled.img`
height: ${props=>props.scrolled?"80%":"100%"};
width: ${props=>props.scrolled?"90%":"100%"};
object-fit: cover;
transition: all 0.4s ease-in-out;
border-radius: ${props=>props.scrolled?"40px":"0px"};
`;

export const TitleContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;

`;
export const TitleTop = styled.span`
font-size:80px;
font-weight: bolder;


`;
export const TitleBottom = styled.span`
font-size: 80px;
font-weight: bolder;


`;