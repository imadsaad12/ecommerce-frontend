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
} from "./styles";
import men from "./men.jpg";
import { useNavigate } from "react-router-dom";
export default function Section3({ targetRef, inView }) {
  const navigate = useNavigate();

  return (
    <Container>
      <>
        <LeftContainer>
          <Image src={men} />
          <Button onClick={() => navigate("/products?type=men&category=*")}>
            Shop Men
          </Button>
        </LeftContainer>
        <RightContainer ref={targetRef}>
          {inView && (
            <>
              <TraitContainer>
                <TopTrait>
                  <TraitTextTop>Premium</TraitTextTop>
                  <TraitTextBottom>Quality</TraitTextBottom>
                  <Line />
                </TopTrait>
                <BottomTrait>
                  From day one, we made the bold choice to break with
                  conventions and shape a model and a future where circularity
                  is the norm. 
                </BottomTrait>
              </TraitContainer>
              <TraitContainer>
                <TopTrait>
                  <TraitTextTop>Premium</TraitTextTop>
                  <TraitTextBottom>Quality</TraitTextBottom>
                  <Line />
                </TopTrait>
                <BottomTrait>
                  From day one, we made the bold choice to break with
                  conventions and shape a model and a future where circularity
                  is the norm. 
                </BottomTrait>
              </TraitContainer>
            </>
          )}
        </RightContainer>
      </>
    </Container>
  );
}
