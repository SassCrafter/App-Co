import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Column = styled.div`
    width: 100%;
    align-self: ${({ alignSelf }) => alignSelf};
    ${'' /* border: 1px solid red; */}

    :not(:last-child) {
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 768px) {
        
        

        :not(:last-child) {
            margin-bottom: 0;
        }
    }
    
`


export const Row = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${({ ai }) => ai || 'center'}
    justify-content: flex-start;

    @media screen and (min-width: 768px) {
        flex-direction: ${({ direction }) => direction};
        align-items: ${({ai}) => ai || 'center'};
        justify-content: space-between;

        ${({ fluid, wd }) => {
            return fluid ? `
                flex-wrap: wrap;
                ${Column} {
                    flex: 0 0 32%;
                }
            ` : wd ? `
                ${Column} {
                    flex: 1 1 49%;
                    max-width: 49%;
                }
            `
            : `
            ${Column} {
                :first-child {
                width: 60%;
                }
                :last-child {
                    width: 30%;
                }
            }
            `
        }}
    }

`



export const Item = styled.div``