import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.header`
    ${'' /* background: var(--secondary-color); */}
    width: 100%;
    height: 6rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    color: white;
    box-shadow: 0 1px 5px rgba(0,0,0, 0);
    background: transparent;
    transition: background 200ms linear 200ms, color 250ms linear, box-shadow 200ms linear;

    &.scrolled {
        color: #333;
        background: white;
        box-shadow: 0 1px 5px rgba(0,0,0, .25);

        .logo {
            filter: brightness(1);
        }
    }

    &.open {
        color: #333;
        background: white;
        transition: background 200ms linear;
        background: white !important;

        .logo {
            filter: brightness(1);
        }
    }
`

export const Nav = styled.nav`
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${'' /* background: inherit;
    transition: inherit; */}
`

export const Logo = styled.img`
    filter: brightness(0) invert(1);
    transition: filter 50ms linear 200ms;
`

export const Burger = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    @media screen and (min-width: 900px) {
        display: none;
    }
`

export const Line = styled.div`
    width: 1.7rem;
    height: 2px;
    background-color: var(--burger-color);
    position: relative;

    &.open {
        height: 0;
        ::before,
        ::after {
            top: 0;
        }

        ::before {
            transform: rotate(45deg);
        }
        ::after {
            transform: rotate(-45deg);
        }
    }

    ::before,
    ::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: inherit;
        position: absolute;
        top: -5px;
    }

    ::after {
        top: calc(100% + 3px);
    }
`

export const Link = styled(ReactRouterLink)`
    line-height: 1;
`