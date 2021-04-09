import React from 'react'
import { Container, Title,  Group, Input, TextArea, Submit } from './styles/form'

function Form({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			{children}
		</Container>
	)
}

export default Form

Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Form.Group = function FormGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>
}

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>
}

Form.TextArea = function FormTextArea({ children, ...restProps }) {
	return <TextArea {...restProps}>{children}</TextArea>
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>
}

