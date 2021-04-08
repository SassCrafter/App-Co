import React from 'react'
import { Section, Flex, Button } from '../components'

function DownloadContainer() {
    return (
        <Section height='80vh' maxHeight='600px' py='0' bg='/images/hero/bg.jpg' overlay='var(--gradient)' overlayOpacity='0.8'>
            <div className='container'>
                <Flex>
                    <Flex.Row>
                        <Flex.Column>
                            <Section.Text textAlign='left' textColor='white'>
                                <Section.Title>Start Managing your apps business, more faster</Section.Title>
                                <Section.Lead color='inherit'>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</Section.Lead>
                            </Section.Text>
                            <Button.Container>
                                <Button>
                                    <Button.IconContainer>
                                        <i className='fab fa-android'></i>
                                    </Button.IconContainer>
                                    Google Play
                                </Button>
                                <Button bg='white' color='white' styleType='outline'>
                                    <Button.IconContainer>
                                        <i className='fab fa-apple'></i>
                                    </Button.IconContainer>
                                    App Store
                                </Button>
                            </Button.Container>
                        </Flex.Column>
                        <Flex.Column alignSelf='flex-end'>
                            <Section.Image  src='/images/download/app-hand-top.png' alt='hand' />
                        </Flex.Column>
                    </Flex.Row>
                </Flex>
            </div>
        </Section>
    )
}

export default DownloadContainer
