import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;

    
    :not(:last-child) {
        margin-bottom: 2rem;
    }
`

export const IconContainer = styled.div`
    ${'' /* width: 15rem;
    height: 15rem; */}
    width: 6.5rem;
    height: 6.5rem;
    margin-right: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0,0,0, 0.1);
`

export const Icon = styled.img``

export const Description = styled.p`
    flex: 1;
    font-size: 1.4rem;

    @media screen and (min-width: 768px) {
        font-size: 1.6rem;
    }
`