import React from 'react'
import { Form } from '../index'

function ContactForm() {
	return (
		<Form>
			<Form.Title>Reach us quickly</Form.Title>
			<Form.Group>
				<Form.Input placeholder="Enter name"/>
				<Form.Input type='email' placeholder="Enter email"/>
			</Form.Group>
			<Form.Group>
				<Form.Input placeholder="Enter phone"/>
				<Form.Input placeholder="Enter company"/>
			</Form.Group>
			<Form.Group>
				<Form.TextArea rows='8' cols='3' placeholder='Message'/>
			</Form.Group>
			<Form.Submit>Send Message</Form.Submit>
		</Form>
	)
}

export default ContactForm