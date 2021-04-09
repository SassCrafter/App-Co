import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: ${({ mw }) => mw};
    overflow: hidden;
`

export const Inner = styled.img`
    min-width: 8rem;
    max-width: 13rem;
    margin-bottom: 2rem;
`