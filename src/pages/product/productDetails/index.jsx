import React, { useState } from "react";
import {
  Container,
  Name,
  Price,
  Description,
  QuantityPurchase,
  CounterContainer,
  Quantity,
  Buttons,
  AddtoCart,
} from "./styles";
import Colors from "./Colors";
import Sizes from "./Sizes";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { colorsOptions } from "../../../global";

export default function ProductDetails({ pdata }) {
  const colors = pdata.sizes.map(({ color }) =>
    colorsOptions.find(({ text }) => text === color)
  );

  const [selectedOptions, setselectedOptions] = useState({
    color: colors[0],
    size: null,
  });
  const [quantity, setquantity] = useState(1);

  return (
    <Container>
      <Name>{pdata.name}</Name>
      <Price>{pdata.price}$</Price>
      <Description>{pdata.description}</Description>
      <Colors
        colors={colors}
        selectedColor={selectedOptions.color}
        setselectedOptions={setselectedOptions}
      />
      <Sizes selectedOptions={selectedOptions} pdata={pdata} />
      <QuantityPurchase>
        <CounterContainer>
          <Quantity>{quantity}</Quantity>
          <Buttons>
            <IoIosArrowUp
              onClick={() => {
                setquantity(quantity + 1);
              }}
            />
            <IoIosArrowDown
              onClick={() => {
                if (quantity > 0) {
                  setquantity(quantity - 1);
                }
              }}
            />
          </Buttons>
        </CounterContainer>
        <AddtoCart>Add To Cart</AddtoCart>
      </QuantityPurchase>
    </Container>
  );
}
