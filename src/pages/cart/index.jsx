import React, { useState } from "react";
import { BodyContainer, Container, Message } from "./styles";
import Header from "./header";
import Products from "./Products";
import Costs from "./Costs";
import { useSelector } from "react-redux";
import AddressInformation from "./addressInformation";

export default function Cart() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { products = [] } = useSelector((state) => state?.cart);
  const totalPrice = products.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);

  return (
    <Container>
      <Header isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      {products.length === 0 ? (
        <>
          <Message>Your shopping cart is currently empty !!</Message>
        </>
      ) : (
        <>
          {isFormOpen ? (
            <AddressInformation
              data={products}
              totalPrice={totalPrice}
              setIsFormOpen={setIsFormOpen}
            />
          ) : (
            <BodyContainer>
              <Products data={products} />
              <Costs totalPrice={totalPrice} setIsFormOpen={setIsFormOpen} />
            </BodyContainer>
          )}
        </>
      )}
    </Container>
  );
}
