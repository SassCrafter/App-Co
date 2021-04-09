import styled from 'styled-components/macro'

export const ImageContainer = styled.div`
    width: 100%;
    transform: scale(0.8);
    display: flex;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0,0,0, 0.1);
    ${'' /* padding: 5rem 0; */}
    overflow: hidden;
    margin: 0 auto;
    border-radius: 5rem;
    background-image: ${({ bg }) => `url(${bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (min-width: 900px) {
        height: 60rem;
    }
`

export const Image = styled.img`
    width: 80%;
    object-fit: cover;

    @media screen and (min-width: 900px) {
        ${'' /* width: 32rem; */}
    }
    ${'' /* max-width: 28rem;

    @media screen and (min-width: 900px) {
        width: 30rem; */}
    }
`

export const PaginationEl = styled.div`
    margin: 3rem 0;
    display: flex;
    justify-content: center;

    .swiper-pagination-bullet {
        margin: 0 .5rem;
        background-color: var(--primary-color);
    }
`

export const Frame = styled.div`
    max-width: 55rem;
    height: 45rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    pointer-events: none;
    display: none;

    img {
        width: 34rem;
    }
`