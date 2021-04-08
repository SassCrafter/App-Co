import React from 'react'
import { Container, Title, IconContainer, Icon , Price, Line, List, Li, Button } from './styles/priceCard'

function PriceCard({ children, bg='white', ...restProps }) {
    return (
        <Container bg={bg} {...restProps}>
            {children}
        </Container>
    )
}

export default PriceCard

PriceCard.Title = function PriceCardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

PriceCard.IconContainer = function PriceCardIconContainer({ children, ...restProps }) {
    return <IconContainer {...restProps}>{children}</IconContainer>
}

PriceCard.Icon = function PriceCardIcon({ ...restProps }) {
    return <Icon {...restProps} />
}

PriceCard.Price = function PriceCardPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}

PriceCard.Line = function PriceCardLine({ ...restProps }) {
    return <Line {...restProps} />
}

PriceCard.List = function PriceCardList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

PriceCard.Li = function PriceCardLi({ children, ...restProps }) {
    return <Li {...restProps}>{children}</Li>
}

PriceCard.Button = function PriceCardButton({ children, styleType='solid', ...restProps }) {
    console.log("Price button invoked")
    return <Button styleType={styleType} {...restProps}>{children}</Button>
}