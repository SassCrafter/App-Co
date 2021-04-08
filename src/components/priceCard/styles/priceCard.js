import styled from 'styled-components/macro'
import { Button as Btn } from '../../index'
    
export const Container = styled.div`
    background: ${({ bg }) => bg};
    padding: 2rem;
    text-align: center;
    box-shadow: 0 0 5px 1px #eae8e8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-top: 4px solid transparent;
    border-radius: 5px;
    overflow: hidden;
    transition: all 200ms ease-in-out;

    &:hover,
    &.active {
        box-shadow: 0 1rem 3rem rgba(31,45,61,.135);
        border-color: var(--primary-color);
    }

    &:hover {
        border-radius: 2.5rem;
    }

    

    @media screen and (min-width: 768px) {
        &:hover,
        &.active {
            transform: translateY(-2rem);
        }
    }
`

export const Title = styled.h3`
    font-weight: 600;

    @media screen and (min-width: 900px) {
        font-size: 2.5rem;
    }
`

export const IconContainer = styled.div`
    width: 100%;
    max-width: 8rem;
    margin-bottom: 2rem;
`

export const Icon = styled.img``

export const Price = styled.h2`
    font-size: 4rem;
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #333;
    opacity: 0.2;
    margin-bottom: 2rem;
`

export const List = styled.ul`
    margin-bottom: 2rem;
`

export const Li = styled.li`
    margin: 0.5rem 0;
    color: var(--text-color-light);
    font-size: 1.4rem;
`


export const Button = styled(Btn)`
    color: red;
    ${'' /* ${({ styleType }) => {
        console.log(styleType);

        return styleType === 'solid' ? `
            opacity: 0.1;
            &:hover {
                opacity: 0.1;   
                color: white !important;
                background-color: var(--primary-color);
            }
        ` : `
        
        `
    }} */}
`