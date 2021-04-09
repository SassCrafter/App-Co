import React from 'react'
import { Form } from '../index'

function ContactForm() {
	return (
		<Form>
			<Form.Group>
				<Form.Input placeholder="Enter name"/>
				<Form.Input type='email' placeholder="Enter email"/>
			</Form.Group>
			<Form.Group>
				<Form.Input placeholder="Enter phone"/>
				<Form.Input placeholder="Enter company"/>
			</Form.Group>
			<Form.Group>
				<Form.TextArea placeholder='Message'/>
			</Form.Group>
		</Form>
	)
}

export default ContactForm