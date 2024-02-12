import React, { useState } from 'react'
import { Container,Wrapper,Image ,Name,Price} from './styles'
import image1 from "../image1.jpg"
import Colors from './Colors'
export default function Product({product}) {
    const {images,name,price}=product
    let colors=[...new Set(images.map(size => size.color))]
    const [selectedColor,setselectedColor]=useState(colors[0])
    const findimage = ()=>{
        images.find(img => img.color === selectedColor);
    }
  return (
    <Container>
        <Wrapper>
                <Image src={image1}/>
                {/* <Image src={findimage(selectedColor)}/> */}
                <Name>{name}</Name>
                <Price>{price}$</Price>
                <Colors setselectedColor={setselectedColor} colors={colors} selectedColor={selectedColor} />
        </Wrapper>
    </Container>
  )
}
