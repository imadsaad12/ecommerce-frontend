import styled,{keyframes} from "styled-components";
import { breakingPoints } from "../../../global/theme";
import { themecolors } from "../../../global/theme";
export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
margin-top: 10vh;
@media (max-width: ${breakingPoints.sm}px) {
    height: 30vh;
    margin-top: 10vh;

  }

`;
export const Image = styled.img`
height: ${props=>props.isFadeIn?"100%":"80%"};
width: ${props=>props.isFadeIn?"100%":"90%"};
object-fit: cover;
transition: all 0.4s ease-in-out;
border-radius: ${props=>props.isFadeIn?"0px":"40px"};
`;

const TitleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);

  }
`;
export const TitleContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: ${themecolors.white};
`;

export const TitleTop = styled.span`
font-size:80px;
font-weight: bolder;
animation: 0.6s ${TitleAnimation} ease-in-out;


@media (max-width: ${breakingPoints.sm}px) {
    font-size:40px;
  }
`;

