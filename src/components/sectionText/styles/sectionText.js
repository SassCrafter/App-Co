import styled from 'styled-components/macro'

export const Container = styled.div`
	text-align: ${({textAlign}) => textAlign};
	max-width: 50rem;
	margin: 0 auto 4rem auto;
`

export const Title = styled.h2`
	font-size: 2rem;

	@media screen and (min-width: 600px) {
		font-size: 3rem;
	}
`

export const Lead = styled.p`
	font-size: 1.8rem;
	color: var(--text-color-light);
`