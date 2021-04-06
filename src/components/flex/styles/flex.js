import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Row = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media screen and (min-width: 768px) {
        flex-direction: ${({ direction }) => direction};
        justify-content: space-between;
    }

`

export const Column = styled.div`
    width: 100%;
    ${'' /* border: 1px solid red; */}

    :not(:last-child) {
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 768px) {
        :first-child {
            width: 60%;
        }
        :last-child {
            width: 30%;
        }

        :not(:last-child) {
            margin-bottom: 0;
        }
    }
`

export const Item = styled.div``