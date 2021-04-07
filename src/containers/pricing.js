import React from 'react'
import { Flex, Section, PriceCard } from '../components'
import PricingData from '../fixtures/pricingData.json'

function PricingContainer() {
    return (
        <Section>
            <div className='container'>
                <Section.Text>
                    <Section.Title>
                        Afforadble Pricing and Packages <Section.RegularWeight>choose your best one</Section.RegularWeight>
                    </Section.Title>
                    <Section.Lead>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</Section.Lead>
                </Section.Text>
                <Flex>
                    <Flex.Row fluid>
                        {PricingData.map((item) => {
                            return (
                                <Flex.Column key={item.id}>
                                    <PriceCard className={item.active ? 'active' : ''}>
                                        <PriceCard.Title>{item.title}</PriceCard.Title>
                                        <PriceCard.IconContainer>
                                            <PriceCard.Icon src={item.icon} alt={item.title} />
                                        </PriceCard.IconContainer>
                                        <PriceCard.Price>${item.price}</PriceCard.Price>
                                        <PriceCard.Line />
                                        <PriceCard.List>
                                            {item.features.map((feature, idx) => (
                                                <PriceCard.Li key={idx}>
                                                    {feature}
                                                </PriceCard.Li>
                                            ))}
                                        </PriceCard.List>
                                        {item.active ? (
                                            <PriceCard.Button bg='var(--primary-color)' color='white' btnType='priceBtn'>Purchase now</PriceCard.Button>
                                        ) : (
                                            <PriceCard.Button color='var(--primary-color)' styleType='outline' btnType='priceBtn'>Purchase now</PriceCard.Button>
                                        )}
                                    </PriceCard>
                                </Flex.Column>
                            )
                        })}
                    </Flex.Row>
                </Flex>
            </div>
        </Section>
    )
}

export default PricingContainer
