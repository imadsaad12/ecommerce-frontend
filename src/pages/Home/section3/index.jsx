import React from "react";
import {
  BottomTrait,
  Button,
  Container,
  Image,
  LeftContainer,
  Line,
  RightContainer,
  TopTrait,
  TraitContainer,
  TraitTextBottom,
  TraitTextTop,
  Soon
} from "./styles";
import men from "./men.jpg";
import { useNavigate } from "react-router-dom";
export default function Section3({ targetRef, inView }) {
  const navigate = useNavigate();

  return (
    <Container>
      <>
        <LeftContainer>
          <Soon>Men <br/>Coming<br/> Soon</Soon>
          <Image src={men} />
          {/* <Button onClick={() => navigate("/products?type=men&category=*")}> */}
          {/* <Button>Comming Soon</Button> */}
        </LeftContainer>
        <RightContainer ref={targetRef}>
          {inView && (
            <>
              <TraitContainer>
                <TopTrait>
                  <TraitTextTop>OUR</TraitTextTop>
                  <TraitTextBottom>MISSON</TraitTextBottom>
                  <Line />
                </TopTrait>
                <BottomTrait>
                  Our mission is to empower individuals with a comprehensive
                  selection of sports and athleisure attire, meticulously
                  crafted to prioritize your comfort and performance.
                </BottomTrait>
              </TraitContainer>
              {/* <TraitContainer>
                <TopTrait>
                  <TraitTextTop>MORE THAN</TraitTextTop>
                  <TraitTextBottom>FASSION</TraitTextBottom>
                  <Line />
                </TopTrait>
                <BottomTrait>
                  Through innovative design and advanced fabric technology, we
                  aim to elevate your active lifestyle by delivering
                  sweat-proof, breathable, and stylish pieces that inspire
                  confidence and optimize your every move.
                </BottomTrait>
              </TraitContainer> */}
            </>
          )}
        </RightContainer>
      </>
    </Container>
  );
}
