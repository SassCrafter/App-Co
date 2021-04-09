import styled from 'styled-components/macro'

export const Top = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`

export const Bottom = styled.div`
    margin-bottom: 2rem;
`

export const Image = styled.img`
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    margin-right: 2rem;
`

export const Info = styled.div``

export const Name = styled.h3`
    margin-bottom: 0.5rem;
    color: #222;
`

export const Company = styled.small`
    line-height: 1;
    font-size: 1.4rem;
`

export const Text = styled.p`
    font-size: 1.6rem;
    color: var(--text-color-light);

    @media screen and (min-width: 900px) {
        font-size: 1.8rem;
    }
`

export const Nav = styled.div`
    display: flex;
`

export const Btn = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background-color: var(--primary-color);
    color: white;
    font-size: 1.6rem;

    &:last-child {
        margin-left: 1rem;
    }

    &.swiper-button-disabled {
        opacity: 0.5;
        cursor: initial;
    }
`