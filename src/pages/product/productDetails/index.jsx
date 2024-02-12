import React, { useState } from "react";
import { Container, Name, Price, Description,QuantityPurchase,CounterContainer,Quantity,Buttons,AddtoCart} from "./styles";
import Colors from "./Colors";
import Sizes from "./Sizes";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
export default function ProductDetails({pdata}) {
  let colors=[...new Set(pdata.sizes.map(size => size.color))]
  const [selectedOptions,setselectedOptions]=useState({color:colors[0],size:null})
  const [quantity, setquantity] = useState(1);

  return (
    <Container>
      <Name>CROP TOP SECOND SKIN</Name>
      <Price>20$</Price>
      <Description>
        Le Crop Top du SECOND SKIN est un haut plus court que la normale, à
        couleur unie, avec un col rond et à manches longues avec passe-pouce.
        Disponible à quatre couleurs, noir, bleu, vert militaire et marron, il
        épousera à la perfection votre buste pour vous dessiner une silhouette
        irrésistible.  SECOND SKIN est la nouvelle collection bien-être dans son
        corps. Second Skin est pensé pour toutes les femmes sous toutes leurs
        formes et respectera vos exigences en termes de shaping,de confort, de
        matières respirantes et de flexibilité pour accompagner tous vos
        mouvements.
      </Description>
      <Colors colors={colors} selectedColor={selectedOptions.color}  setselectedOptions={setselectedOptions} />
      <Sizes selectedOptions={selectedOptions} pdata={pdata} />
      <QuantityPurchase>
        <CounterContainer>
          <Quantity>
            {quantity}
          </Quantity>
          <Buttons>
            <IoIosArrowUp onClick={()=>{setquantity(quantity+1)}}/>
            <IoIosArrowDown onClick={()=>{setquantity(quantity-1)}}/>
          </Buttons>
        </CounterContainer>
        <AddtoCart>Add To Cart</AddtoCart>
      </QuantityPurchase>

    </Container>
  );
}
