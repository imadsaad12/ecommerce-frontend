import React from 'react'
import { Container,Wrapper } from './styles'
import { products } from './data'
import Product from './product'
export default function ViewProducts() {
  return (
    <Container>
        <Wrapper>
            {products.map((product)=>{
                return <Product product={product}/>
            })}
        </Wrapper>
    </Container>
  )
}
