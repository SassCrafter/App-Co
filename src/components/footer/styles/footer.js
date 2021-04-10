import styled from 'styled-components/macro'

export const Container = styled.div`  


`

export const Content = styled.div`  
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	color: white;

	i {
		font-size: 1.4rem;
		vertical-align: middle;
		margin-right: 1rem;
		color: inherit;
	}
`

export const Item = styled.div`  
	
	flex: 1 1 100%;
	max-width: 100%;

	@media screen and (min-width: 768px) {
		flex: 1 1 49%;
		max-width: 49%;
	}
	@media screen and (min-width: 900px) {
		flex: 1 1 24%;
		max-width: 24%;
	}

`

export const Logo = styled.img`  
	filter: brightness(0) invert(1);
`

export const Title = styled.h3`  
	`

export const Text = styled.p`  
	font-size: 1.2rem;

	
`

export const List = styled.ul``

export const Li = styled.li`  
	margin: 0.5rem 0;
	display: ${({ flex }) => flex ? 'flex' : 'block'};
	
`

export const Link = styled.a`  
	font-size: 1.2rem;
	color: inherit;

	&:hover {
		text-decoration: underline;
	}
	
`

export const Icon = styled.div``

export const Image = styled.img``