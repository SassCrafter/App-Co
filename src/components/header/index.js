import React from 'react'
import { Container, Nav, Logo, Burger, Link, Line } from './styles/header'


function Header({ children, ...restProps}) {
    
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Header

Header.Nav = function HeaderNav({ children, ...restProps }) {
    return <Nav {...restProps} className='container'>{children}</Nav>
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Logo className='logo' {...restProps}>{children}</Logo>
}
Header.Burger = function HeaderBurger({ children, ...restProps }) {
    return <Burger {...restProps}>{children}</Burger>
}
Header.Line = function HeaderLine({ children, ...restProps }) {
    return <Line {...restProps}>{children}</Line>
}
Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
