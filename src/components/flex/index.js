import React from 'react'
import { Container, Row, Column, Item } from './styles/flex'

function Flex({ children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Flex

Flex.Row = function FlexRow({ children, direction='row', ...restProps }) {
    console.log(restProps);
    return <Row direction={direction} {...restProps}>{children}</Row>
}
Flex.Column = function FlexColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}
Flex.Item = function FlexItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}
