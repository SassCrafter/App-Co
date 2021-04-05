import React from 'react'
import { Container } from './styles/cards'

function Cards({ children, cardsArr=[], ...restProps }) {
	return (
		<Container {...restProps}>
			{children}
		</Container>
	)
}

export default Cards