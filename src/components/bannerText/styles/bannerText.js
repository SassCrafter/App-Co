import styled from 'styled-components/macro'

export const Container = styled.div`
    color: ${({textColor}) => textColor}
`

export const Title = styled.h2`
    font-size: 3.3rem;
    font-weight: 500;
    line-height: 1.1;

    @media screen and (min-width: 600px) {
        font-size: 4.5rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 5.5rem;
    }
`

export const SubTitle = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 2rem;

    @media screen and (min-width: 600px) {
        font-size: 2.2rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 2.6rem;
    }
`

export const Form = styled.form`
    width: 100%;
    max-width: 35rem;
    padding: 1rem 0;

    @media screen and (min-width: 900px) {
        padding: 3rem 0;
    }
`

export const Group = styled.div`
    width: 100%;
    height: 4rem;
    padding: 3px;
    border: 2px solid transparent;
    border-radius: 50rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: border-color 200ms linear;

    :focus-within {
        border-color: var(--primary-color);
    }

    @media screen and (min-width: 600px) {
        height: 5rem;
    }
    @media screen and (min-width: 900px) {
        height: 5.5rem;
    }
`

export const Input = styled.input`
    width: 70%;
    height: 100%;
    padding: 0 1rem;
    border: none;
    background-color: transparent;
    outline: none;

    @media screen and (min-width: 900px) {
        font-size: 1.6rem;
    }
`

export const Submit = styled.button`
    width: 30%;
    height: 100%;
    border-radius: 50rem;
    border: 2px solid transparent;
    outline: none;
    cursor: pointer;
    color: white;
    background-color: var(--primary-color);
    transition: all 200ms linear;

    :hover {
        background-color: transparent;
        color: var(--primary-color);
        border-color: var(--primary-color);
    }

    @media screen and (min-width: 900px) {
        font-size: 1.8rem;
    }
`