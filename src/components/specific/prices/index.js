import React from 'react';
import { Flex, PriceCard } from '../../index';
import PricingData from '../../../fixtures/pricingData.json';

function Prices() {
	return (
		PricingData.map((item) => {
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
        })
	)
}

export default Prices