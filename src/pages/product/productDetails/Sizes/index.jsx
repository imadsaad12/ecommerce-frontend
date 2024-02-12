import React, { useState } from "react";
import { Container, SizeName, SizeContainer, Size, OutOfStock } from "./styles";

export default function Sizes({ selectedOptions, pdata }) {
  const [selectedSize, setselectedSize] = useState("small");
  console.log(selectedOptions, pdata.sizes);
  const sizesWithChosenColor = pdata.sizes.filter(
    (size) => size.color === selectedOptions.color.text
  );
  console.log(sizesWithChosenColor);
  const sizesAvailability = sizesWithChosenColor.map((size) => ({
    size: size.size,
    availability: size.inStock ? "In Stock" : "Out of Stock",
  }));

  return (
    <Container>
      <SizeName>Size : </SizeName>
      {sizesAvailability.map(({ size, availability }) => {
        return (
          <SizeContainer
            onClick={() => {
              setselectedSize(size);
            }}
            availability={availability}
            size={size}
            selectedSize={selectedSize}
          >
            {availability == "Out of Stock" && <OutOfStock />}
            <Size>{size}</Size>
          </SizeContainer>
        );
      })}
    </Container>
  );
}
