import React from 'react'
import { Section, Flex, ContactForm } from '../components'


function ContactContainer() {
	return (
		<Section bgColor='#F4F7FA'>
			<div className="container">
				<Flex>
					<Flex.Row wd ai='flex-start'>
						<Flex.Column>
							<Section.Text textAlign='left'>
								<Section.Title>
									Contact with us
								</Section.Title>
								<Section.Lead>It's very easy to get in touch with us. Just use the contact form or pay us a visit for a coffee at the office. Dynamically innovate competitive technology after an expanded array of leadership.</Section.Lead>
							</Section.Text>
						</Flex.Column>
						<Flex.Column>
							<ContactForm />
						</Flex.Column>
					</Flex.Row>
				</Flex>
			</div>
		</Section>
	)
}

export default ContactContainer