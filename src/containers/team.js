import React from 'react'
import { Section, TeamCard } from '../components'
import TeamData from '../fixtures/teamData.json'

function TeamContainer() {
	return (
		<Section>
			<div className="container">
				<Section.Item>
					<Section.Text>
						<Section.Title>Our team members</Section.Title>
						<Section.Lead>Following reasons show advantages of adding AppCo to your lead pages, demos and checkouts</Section.Lead>
					</Section.Text>
				</Section.Item>
				<TeamCard.Container>
					{TeamData.map((item) => (
						<TeamCard key={item.id}>
							<TeamCard.Image src={item.image} alt={item.name} />
							<TeamCard.Content>
								<TeamCard.Name>{item.name}</TeamCard.Name>
								<TeamCard.Position>{item.position}</TeamCard.Position>
							</TeamCard.Content>
						</TeamCard>
					))}
				</TeamCard.Container>
			</div>
		</Section>
	)
}

export default TeamContainer