import styled from 'styled-components/macro'

export const Container = styled.div`
	width: 100%;
	padding: 2rem;
	margin-bottom: 2rem;
	box-shadow: 2px 2px 10px rgba(0,0,0, 0.1);
	text-align: center;

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