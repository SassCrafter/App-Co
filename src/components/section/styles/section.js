import styled from 'styled-components/macro'

export const Container = styled.section`
    padding: 5rem 0;
    position: relative;
    min-height: ${({ height }) => height || 'auto'};
    background-color: ${({ bgColor }) => bgColor || 'transparent'} ;
    ${({ py }) => `
    
        padding-bottom: ${py} !important; 
    `
    };

    @media screen and (min-width: 768px) {
        padding: ${({ py }) => py || '8rem'} 0;
        height: ${({ height }) => height || 'auto'};
        max-height: ${({ maxHeight }) => maxHeight || 'auto'};
    }

    ${({ bg, bgPos }) => bg && `
        background: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: ${bgPos};
    `}
    ${({ overlay, overlayOpacity }) => `
        ::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: ${overlay};
            opacity: ${overlayOpacity || 1}
        }

        .container {
            position: relative;
            z-index: 2;
        }
    `}
`

export const Item = styled.div`
    margin-bottom: 4rem;

    @media screen and (min-width: 900px) {
        margin-bottom: 6rem;
    }
`

//  Text
export const Text = styled.div`
    color: ${({textColor}) => textColor};
    text-align: ${({textAlign}) => textAlign};
	max-width: 50rem;
	margin: ${({ textAlign }) => textAlign === 'center' ? '0 auto 4rem auto' : '0 0 4rem'};
	
	@media screen and (min-width: 1200px) {
		max-width: 60rem;
	}
`

export const Title = styled.h2`
    font-size: 2.3rem;
    line-height: 1.3;
    color: inherit;

    @media screen and (min-width: 600px) {
        font-size: 3rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 4rem;
    }
`
export const RegularWeight = styled.span`
	font-size: inherit;
	font-weight: 400;
`

export const Lead = styled.p`
	font-size: 1.8rem;
	color: ${({ color }) => color};
`

//  Image

export const ImageContainer = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
    max-height: ${({ mheight}) => mheight || 'auto'};
`

export const Image = styled.img`
    max-width: 100%;
    ${'' /* max-width: 40rem; */}
`