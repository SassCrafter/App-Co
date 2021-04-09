import React from 'react'
import { Section, Flex, Icon, TestimonialsSlider } from '../components'

function TestimonialsContainer() {
    return (
        <Section>
            <div className='container'>
                <Flex>
                    <Flex.Row wd>
                        <Flex.Column>
                            <Section.Text textAlign='left'>
                                <Section.Title>Testimonials <br /><Section.RegularWeight>what clients say</Section.RegularWeight></Section.Title>
                                <Section.Lead>Rapidiously morph transparent internal or "organic" sources whereas resource sucking e-business. Conveniently innovate compelling internal.</Section.Lead>
                            </Section.Text>
                            <Icon.Container mw='80%'>
                                <Icon src='/images/clients/client-1-color.png' alt='client'/>
                                <Icon src='/images/clients/client-6-color.png' alt='client'/>
                                <Icon src='/images/clients/client-3-color.png' alt='client'/>
                            </Icon.Container>
                        </Flex.Column>
                        <Flex.Column>
                            <TestimonialsSlider />
                        </Flex.Column>
                    </Flex.Row>
                </Flex>
            </div>
        </Section>
    )
}

export default TestimonialsContainer
