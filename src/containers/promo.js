import React from 'react'
import { Section, Cards, Card } from '../components/'
import PromoData from '../fixtures/promoData.json'

function PromoContainer() {
	return (
		<Section>
			<div className="container">
				<Section.Text>
					<Section.Title>Why small business owners love AppCo?</Section.Title>
					<Section.Lead>Following reasons show advantages of adding AgencyCo to your lead pages, demos and checkouts</Section.Lead>
				</Section.Text>
				<Cards>
					{PromoData.map((item) => (
						<Card key={item.id}>
							<Card.IconContainer bg={item.bg}>
								<i className={item.iconClassName}></i>
							</Card.IconContainer>
							<Card.Title>{item.title}</Card.Title>
							<Card.Description>{item.description}</Card.Description>
						</Card>
					))}
				</Cards>
			</div>	
		</Section>
	)
}

export default PromoContainer