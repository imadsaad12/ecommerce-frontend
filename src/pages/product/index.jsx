import React from 'react'
import { Container,ProductContainer } from './styles'
import ProductGallery from './productGallery'
import ProductDetails from './productDetails'
import Carousel from '../../components/Carousel'
import {pdata} from "./data"
export default function Product() {
  return (
    <Container>
        <ProductContainer>
                <ProductGallery pdata={pdata}/>
                <ProductDetails pdata={pdata}/>
        </ProductContainer>
        <Carousel/>
    </Container>
  )
}
