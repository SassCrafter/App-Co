import React from 'react'
import { Footer, Section } from '../components'

function FooterContainer() {
	return (
		<div>
			<Section bg='/images/footer/bg.png'>
				<div className="container">
					<Footer.Content>
						<Footer.Item>
							<Footer.Logo src='/images/logo.png' alt='app co' />
							<Footer.Text>Holisticly empower premium architectures without value-added ideas. Seamlessly evolve cross-platform experiences.</Footer.Text>
						</Footer.Item>
						<Footer.Item>
							<Footer.Title>Other Links</Footer.Title>
							<Footer.List>
								<Footer.Li>
								    <Footer.Link href='#'>About Us</Footer.Link>
								</Footer.Li>
								<Footer.Li>
								    <Footer.Link href='#'>Contact Us</Footer.Link>
								</Footer.Li>
								<Footer.Li>
								    <Footer.Link href='#'>Pricing</Footer.Link>
								</Footer.Li>
								<Footer.Li>
								    <Footer.Link href='#'>About Us</Footer.Link>
								</Footer.Li>
								<Footer.Li>
								    <Footer.Link href='#'>Privacy Policy</Footer.Link>
								</Footer.Li>
								<Footer.Li>
								    <Footer.Link href='#'>Terms and Conditions</Footer.Link>
								</Footer.Li>
								
							</Footer.List>
						</Footer.Item>

						<Footer.Item>
							<Footer.Title>Support</Footer.Title>
							<Footer.List>
								<Footer.Li flex>
								    <i class="fas fa-map-marker-alt"></i>
									<Footer.Text>121 King Melbourne <br />Australia 3000</Footer.Text>
								</Footer.Li>
								<Footer.Li >
									<Footer.Link href='#'>
										<i class="fas fa-mobile-alt"></i>+61 2 8376 6284
									</Footer.Link>
								</Footer.Li>
								<Footer.Li >
								    <Footer.Link href='#'>
								    	<i className='fas fa-envelope'></i>mail@example.com
								    </Footer.Link>
								</Footer.Li>
								<Footer.Li >
								    <Footer.Link href='#'>
								    	<i className='fas fa-globe'></i>www.yourdomain.com
								    </Footer.Link>
								</Footer.Li>
							</Footer.List>
						</Footer.Item>

						<Footer.Item>
							<Footer.Title>Location</Footer.Title>
							<Footer.Image src='/images/footer/map.png' alt='map' />
						</Footer.Item>
					</Footer.Content>
				</div>
			</Section>
		</div>
	)
}

export default FooterContainer