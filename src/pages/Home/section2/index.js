import React from 'react'
import { Container } from './styles'
import { Image } from './styles'
import header from "../static/header.jpg"
import Carousel from '../../../components/Carousel'
export default function Section2({scrolled}) {
  return (
    <Container>
      <Carousel/>
    </Container>
  )
}
