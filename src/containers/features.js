import React, { useState } from 'react'
import { Section, Flex, Tabs } from '../components/'
import FeaturesTabs from '../fixtures/featuresTabs.json'


function FeaturesContainer() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <Section>
            <div className='container'>
                <Flex>
                    <Flex.Row direction='row-reverse'>
                        <Flex.Column>
                            <Section.Text textAlign='left'>
                                <Section.Title>Quick & Easy Process with <Section.RegularWeight>best features</Section.RegularWeight></Section.Title>
                                <Section.Lead>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</Section.Lead>
                            </Section.Text>
                            <Tabs>
                                <Tabs.List>
                                    {FeaturesTabs.map((item, idx) => (
                                        <Tabs.Tab key={item.id} className={activeTab === idx ? 'active' : ''}>
                                            <Tabs.TabIcon>
                                                <i className={item.iconClass}
                                                ></i>
                                            </Tabs.TabIcon>
                                            <Tabs.TabTitle>{item.title}</Tabs.TabTitle>
                                        </Tabs.Tab>
                                    ))}
                                </Tabs.List>
                            </Tabs>
                        </Flex.Column>
                        <Flex.Column>
                            <Section.Image justify='flex-start' src='/images/features/features-img.png' />
                        </Flex.Column>
                    </Flex.Row>
                </Flex>
            </div>
        </Section>
    )
}

export default FeaturesContainer
