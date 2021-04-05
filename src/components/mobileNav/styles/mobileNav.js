import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.nav`
    height: 0;
    width: 100%;
    position: fixed;
    top: 6rem;
    left: 0;
    overflow: hidden;
    background: inherit;
    transition: height 200ms ease-in-out;

    @media screen and (min-width: 900px) {
        width: auto;
        position: static;
        background: transparent;
        height: auto !important;
    }

    &.open {
        height: 185px;
    }
`

export const List = styled.ul`
    padding: 0.5rem 2rem;

    @media screen and (min-width: 900px) {
        display: flex;
    }
`

export const Item = styled.li`
    margin: 1rem 0;
    @media screen and (min-width: 900px) {
        margin: 0 1rem;
    }
`

export const RouterLink = styled(ReactRouterLink)``

export const Link = styled.a`
    display: inline-block;
    padding: 0.25rem;
    color: white;
    opacity: 0.8;
    font-size: 1.4rem;
    transition: opacity 150ms linear;

    :hover {
        text-decoration: underline;
        opacity: 1;
    }

    @media screen and (min-width: 900px) {
        font-size: 1.6rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 1.8rem;
    }
`
