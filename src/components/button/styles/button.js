import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    margin: 2rem;
    @supports (gap: 2rem) {
        gap: 2rem;
        margin: 0;
    }
`

export const Inner = styled.button`
    display: flex;
    padding: 1rem 2rem;
    border-radius: 50rem;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    background-color: var(--primary-color);
    transition: all 200ms linear;

    ${({ bg, color, styleType }) => {
        return styleType === 'solid' ? `
            background-color: ${bg};
            color: ${color};
            border: 2px solid transparent;

            :hover {
                border-color: white;
                background-color: transparent;
                color: white;
            }
        ` : `
            background-color: transparent;
            color: ${color};
            border: 2px solid ${color};

            :hover {
                background-color: ${bg};
                color: var(--primary-color);
            }
        `;
    }}

    

    @media screen and (min-width: 900px) {
        font-size: 1.8rem;
    }
`

export const IconContainer = styled.div`
    margin-right: 1rem;
`

export const Icon = styled.img``