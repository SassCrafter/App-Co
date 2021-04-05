import React from 'react'
import { Container, List, Item, Link, RouterLink } from './styles/mobileNav'

function MobileNav({ children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default MobileNav

MobileNav.List = function MobileNavList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

MobileNav.Item = function MobileNavItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

MobileNav.RouterLink = function MobileNavRouterLink({ children, ...restProps }) {
    return <RouterLink {...restProps}>{children}</RouterLink>
}

MobileNav.Link = function MobileNavLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
