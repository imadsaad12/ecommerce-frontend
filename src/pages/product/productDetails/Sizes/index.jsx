import React, { useState } from "react";
import { Container, SizeName, SizeContainer, Size, OutOfStock } from "./styles";

export default function Sizes({ selectedOptions, pdata, setselectedOptions }) {
  const [selectedSize, setselectedSize] = useState("");

  const sizesWithChosenColor = pdata.sizes.filter(
    (size) => size.color === selectedOptions.color.text
  );

  const sizesAvailability = sizesWithChosenColor.map((size) => ({
    size: size.size,
    availability: size.inStock,
  }));

  return (
    <Container>
      <SizeName>Size : </SizeName>
      {sizesAvailability.map(({ size, availability }) => {
        return (
          <SizeContainer
            onClick={() => {
              if (availability) {
                setselectedSize(size);
                setselectedOptions({ ...selectedOptions, size });
              }
            }}
            availability={availability}
            size={size}
            selectedSize={selectedSize}
          >
            {!availability && <OutOfStock />}
            <Size>{size}</Size>
          </SizeContainer>
        );
      })}
    </Container>
  );
}
