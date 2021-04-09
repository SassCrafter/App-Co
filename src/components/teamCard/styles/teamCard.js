import styled from 'styled-components/macro'

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

`

export const Content = styled.div`
	background-image: linear-gradient(to right, rgba(32, 40, 119, 0.85), rgba(55, 46, 149, 0.9), rgba(83, 49, 177, 0.85), rgba(114, 48, 205, 0.8), rgba(150, 41, 230, 0.8));
	width: 100%;
	height: 100%;
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	opacity: 0;
	transform: translateY(2rem);
	transition: all 250ms ease-in-out;
`

export const Inner = styled.div`
	flex: 1 1 100%;
	max-width: 100%;
	position: relative;
	margin-bottom: 2rem;
	border-radius: 50%;
	overflow: hidden;

	@media screen and (min-width: 600px) {
		flex: 1 1 48%;
		max-width: 48%;
	}
	@media screen and (min-width: 900px) {
		flex: 1 1 23%;
		max-width: 23%;
	}

	&:hover {
		${Content} {
			opacity: 1;
			transform: translateY(0);
		}
	}
`

export const Image = styled.img`
	border-radius: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
`



export const Name = styled.h3`
	margin-bottom: 1rem;
	font-size: 2.5rem;
`

export const Position = styled.h4``

export const List = styled.ul``

export const Li = styled.li``

export const Link = styled.a``

