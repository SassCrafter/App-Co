import React from 'react'
import { Container, Inner, Content, Image, Name, Position, List, Li, Link } from './styles/teamCard'

function TeamCard({ children, ...restProps }) {
	return (
		<Inner {...restProps}>
			{children}
		</Inner>
	)
}

export default TeamCard


TeamCard.Container = function TeamCardContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}
TeamCard.Image = function TeamCardImage({ children, ...restProps }) {
	return <Image {...restProps} />
}
TeamCard.Content = function TeamCardContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>
}
TeamCard.Name = function TeamCardName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>
}
TeamCard.Position = function TeamCardPosition({ children, ...restProps }) {
	return <Position {...restProps}>{children}</Position>
}
TeamCard.List = function TeamCardList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>
}
TeamCard.Li = function TeamCardLi({ children, ...restProps }) {
	return <Li {...restProps}>{children}</Li>
}
TeamCard.Link = function TeamCardLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>
}
