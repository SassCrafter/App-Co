import React from 'react'
import { Container, Inner } from './styles/icon'

function Icon({ ...restProps }) {
    return (
        <Inner {...restProps} />
    )
}

export default Icon

Icon.Container = function IconContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}