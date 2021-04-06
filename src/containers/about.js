import React from 'react'
import { Section, SectionText, SectionImg, Flex, Feature } from '../components'
import AboutFeaturesData from '../fixtures/aboutFeaturesData.json'

function AboutContainer() {
    return (
        <Section bg='/images/about/about-bg-shape.svg'>
            <div className='container'>
                <Flex>
                    <Flex.Row>
                        <Flex.Column>
                            <Section.Text textAlign='left'>
                                <Section.Title>Use your android or ios device <Section.RegularWeight>to manage everything.</Section.RegularWeight></Section.Title>
                            </Section.Text>
                            <Feature.Container>
                                {AboutFeaturesData.map((item) => (
                                    <Feature key={item.id}>
                                        <Feature.IconContainer>
                                            <Feature.Icon src={item.icon} alt='icon'/>
                                        </Feature.IconContainer>
                                        <Feature.Description>{item.description}</Feature.Description>
                                    </Feature>
                                ))}
                            </Feature.Container>
                        </Flex.Column>
                        <Flex.Column>
                            <Section.Image src='/images/about/about-img.png' alt='about image' />
                        </Flex.Column>
                    </Flex.Row>
                </Flex>
            </div>
        </Section>
    )
}

export default AboutContainer
