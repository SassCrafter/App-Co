import React from 'react'
import { SectionText, Cards, Card } from '../components/'
import PromoData from '../fixtures/promoData.json'

function PromoContainer() {
	return (
		<section className='section'>
			<div className="container">
				<SectionText>
					<SectionText.Title>Why small business owners love AppCo?</SectionText.Title>
					<SectionText.Lead>Following reasons show advantages of adding AgencyCo to your lead pages, demos and checkouts</SectionText.Lead>
				</SectionText>
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
		</section>
	)
}

export default PromoContainer