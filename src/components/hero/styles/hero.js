import styled from 'styled-components/macro'

export const Container = styled.section`
    width: 100%;
    max-height: 90rem;
    padding: 8rem 0;
    background-image: url(/images/hero/bg.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background-image: var(--gradient);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.9;
    }

    @media screen and (min-width: 600px) {
        min-height: 70vh;
    }
    @media screen and (min-width: 900px) {
        min-height: 80vh;
    }
`

export const Base = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media screen and (min-width: 600px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
    @media screen and (min-width: 900px) {
        align-items: center;
    }
`

export const Item = styled.div`
    width: 100%;
    :first-child {
        margin-bottom: 2rem;
    }
    @media screen and (min-width: 600px) {
        width: 40%;

        :first-child {
            width: 55%;
            margin-bottom: 0;
        }

    }
`

export const Image = styled.img`
    
`

export const BottomImage = styled.img`
    position: absolute;
    bottom: -1rem;
    left: 0;
    min-width: 100%;
    z-index: 3;

    @media screen and (min-width: 600px) {
        bottom: -4rem;
    }
    @media screen and (min-width: 1200px) {
        bottom: -8rem;
    }
`