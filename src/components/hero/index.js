import React from 'react'
import { Container, Base, Item, Image, BottomImage } from './styles/hero'

function Hero({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

export default Hero

Hero.Base = function HeroBase({ children, ...restProps }) {
    return <Base className='container' {...restProps}>{children}</Base>
}

Hero.Item = function HeroItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Hero.Image = function HeroImage({ ...restProps }) {
    return <Image {...restProps} />
}

Hero.BottomImg = function HeroBottomImg({ ...restProps }) {
    return <BottomImage {...restProps} />
}
