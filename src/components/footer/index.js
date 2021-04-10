import React from 'react'
import { Container, Content, Item, Logo, Title, Text, List, Li, Link, Icon, Image } from './styles/footer'

function Footer({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			{children}
		</Container>
	)
}

export default Footer

Footer.Content = function FooterContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>
}

Footer.Item = function FooterItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>
}

Footer.Logo = function FooterLogo({ children, ...restProps }) {
	return <Logo {...restProps}>{children}</Logo>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

Footer.List = function FooterList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>
}

Footer.Li = function FooterLi({ children, ...restProps }) {
	return <Li {...restProps}>{children}</Li>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>
}

Footer.Icon = function FooterIcon({ children, ...restProps }) {
	return <Icon {...restProps}>{children}</Icon>
}

Footer.Image = function FooterImage({...restProps }) {
	return <Image {...restProps} />
}