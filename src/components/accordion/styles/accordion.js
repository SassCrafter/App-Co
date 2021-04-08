import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    
`
export const Inner = styled.div`
    width: 100%;
    border: 1px solid #ebebeb;
    margin-bottom: 2rem;
    color: ${({ color }) => color};
    background-color: ${({ bg }) => bg || 'white'};

`


export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    user-select: none;
    cursor: pointer;
`

export const Body = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height 100ms linear;

    &.open {
        max-height: 20rem;
        transition: max-height 200ms linear;
    }
`

export const Title = styled.h3`
    margin-bottom: 0;
    font-size: 1.8rem;
    font-weight: 500;
    color: inherit;
`

export const Text = styled.p`
    padding: 0 2rem 2rem;
    color: inherit;
`

export const Icon = styled.span`
    font-size: 2rem;
    font-weight: 600;
    color: inherit;
`


