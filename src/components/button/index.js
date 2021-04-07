import React from 'react'
import { Container, Inner, IconContainer, Icon } from './styles/button'

function Button({ children, color='var(--primary-color)', bg='white', styleType='solid', restProps }) {
    return (
        <Inner color={color} bg={bg} styleType={styleType} {...restProps}>
            {children}
        </Inner>
    )
}

export default Button

Button.Container = function ButtonContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Button.IconContainer = function ButtonIconContainer({ children, ...restProps }) {
    return <IconContainer {...restProps }>{children}</IconContainer>
}

Button.Icon = function ButtonIcon({ ...restProps }) {
    return <Icon {...restProps} />
}