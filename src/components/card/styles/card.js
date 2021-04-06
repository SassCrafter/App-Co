import styled from 'styled-components/macro'

export const Container = styled.div`
	width: 100%;
	padding: 2rem;
	border-radius: 1.5rem;
	margin-bottom: 3rem;
	box-shadow: 0 3px 20px 0px rgba(0,0,0, 0.2);
	text-align: center;
	transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

	:hover {
		transform: translate3d(0, -2rem, 0);
		box-shadow: 2px 8px 20px 0px rgba(0,0,0, 0.3);
	}
	

	@media screen and (min-width: 768px) {
		width: 32%;
		margin-bottom: 0;
	}
`

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 15rem;
	height: 10rem;
	background: url(${({bg}) => bg}) no-repeat;
	background-position: 45% 20%;
	background-size: 15rem;
	margin: 0 auto 2rem auto;

	i {
		padding-top: .5rem;
		font-size: 2.5rem;
		color: white;
	}
`

export const Icon = styled.img`
	width: 100%;
	max-width: 15rem;
	max-height: 15rem;
`

export const Title = styled.h4`
	font-size: 2rem;
`

export const Description = styled.p`
	color: var(--text-color-light);
`