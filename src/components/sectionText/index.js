import React from 'react'
import { Container, Title, Lead } from './styles/sectionText'

function SectionText({ children, textAlign='center', ...restProps }) {
	return (
		<Container textAlign={textAlign} {...restProps}>
			{children}
		</Container>
	)
}

export default SectionText

SectionText.Title = function SectionTextTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

SectionText.Lead = function SectionTextLead({ children, ...restProps }) {
	return <Lead {...restProps}>{children}</Lead>
}