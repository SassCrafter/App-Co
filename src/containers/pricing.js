import React from 'react'
import { Flex, Section, Prices, PriceCard, Faqs } from '../components'

function PricingContainer() {
    return (
        <Section bg='/images/bgs/shape-bg-right.svg' bgPos='top right'>
            <div className='container'>
                <Section.Item>
                    <Section.Text>
                        <Section.Title>
                            Afforadble Pricing and Packages <Section.RegularWeight>choose your best one</Section.RegularWeight>
                        </Section.Title>
                        <Section.Lead>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</Section.Lead>
                    </Section.Text>
                </Section.Item>
                <Section.Item>
                    <Flex>
                        <Flex.Row fluid>
                            <Prices />  
                        </Flex.Row>
                    </Flex>
                </Section.Item>
                <Faqs />
            </div>
        </Section>
    )
}

export default PricingContainer
