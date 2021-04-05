import React from 'react'
import { Container, IconContainer, Icon, Title, Description } from './styles/card'

function Card({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			{children}
		</Container>
	)
}

export default Card

Card.IconContainer = function CardIconContainer({ children, ...restProps }) {
	return <IconContainer {...restProps}>{children}</IconContainer>
}

Card.Icon = function CardIcon({ ...restProps }) {
	return <Icon {...restProps} />
}

Card.Title = function CardTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Card.Description = function CardDescription({ children, ...restProps }) {
	return <Description {...restProps}>{children}</Description>
}