import React from 'react'
import { Accordion, Flex } from '../index'
import FaqsData from '../../fixtures/faqs.json'

console.log(FaqsData.leftSide);

function Faqs() {
	return (
		<Flex >
			<Flex.Row wd ai='flex-start'>
				<Flex.Column>
					<Accordion.Container>
						{FaqsData.leftSide.map((item) => (
							<Accordion key={item.id} id={item.id}>
			                    <Accordion.Header id={item.id}>
			                        <Accordion.Title>{item.title}</Accordion.Title>
			                    </Accordion.Header>
			                    <Accordion.Body id={item.id}>
			                        <Accordion.Text>{item.text}</Accordion.Text>
			                    </Accordion.Body>
			                </Accordion>
						))}
					</Accordion.Container>
				</Flex.Column>
				<Flex.Column>
					<Accordion.Container>
						{FaqsData.rightSide.map((item) => (
							<Accordion key={item.id} id={item.id}>
			                    <Accordion.Header id={item.id}>
			                        <Accordion.Title>{item.title}</Accordion.Title>
			                    </Accordion.Header>
			                    <Accordion.Body id={item.id}>
			                        <Accordion.Text>{item.text}</Accordion.Text>
			                    </Accordion.Body>
			                </Accordion>
						))}
					</Accordion.Container>
				</Flex.Column>
			</Flex.Row>
		</Flex>
	)
}

export default Faqs


{/*<Accordion.Container>
            {FaqsData.map((item) => (
                <Accordion key={item.id} id={item.id}>
                    <Accordion.Header id={item.id}>
                        <Accordion.Title>{item.title}</Accordion.Title>
                    </Accordion.Header>
                    <Accordion.Body id={item.id}>
                        <Accordion.Text>{item.text}</Accordion.Text>
                    </Accordion.Body>
                </Accordion>
            ))}
        </Accordion.Container>*/}