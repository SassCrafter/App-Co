import React, { useState } from 'react'
import { Section, Flex, Tabs } from '../components/'
import FeaturesTabs from '../fixtures/featuresTabs.json'


function FeaturesContainer() {
    const [activeTabId, setActiveTabId] = useState(0);


    const filterPanes = (item) => {
        if (item.id === activeTabId) {
            if (item.type === 'sameFeatureIcon') {
                return item.features.map((feature, idx) => (
                    <Tabs.PaneItem key={idx}>
                        <Tabs.PaneContainer>
                            <Tabs.PaneSameIcon >
                                <i className={item.featureIcon}></i>
                            </Tabs.PaneSameIcon>
                            <Tabs.PaneDescription>{feature}</Tabs.PaneDescription>
                        </Tabs.PaneContainer>
                    </Tabs.PaneItem>
                ))
            } else if (item.type === 'differentFeatureIcon') {
                return item.features.map((feature, idx) => (
                    <Tabs.PaneItem key={idx} width='45%'>
                        <Tabs.PaneContainer mb='2rem'>
                            <Tabs.PaneIcon bg={feature.iconBg}>
                                <i className={feature.icon}></i>
                            </Tabs.PaneIcon>
                            <Tabs.PaneTitle>{feature.title}</Tabs.PaneTitle>
                        </Tabs.PaneContainer>
                        <Tabs.PaneDescription>{feature.description}</Tabs.PaneDescription>
                    </Tabs.PaneItem>
                ))
            } else if (item.type === 'noFeatureIcon') {
                return <Tabs.PaneDescription>{item.description}</Tabs.PaneDescription>
            }
        }
        return null
    }

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
                                        <Tabs.Tab key={item.id} tabId={item.id} setActiveTabId={setActiveTabId} className={activeTabId === idx ? 'active' : ''}>
                                            <Tabs.TabIcon>
                                                <i className={item.iconClass}
                                                ></i>
                                            </Tabs.TabIcon>
                                            <Tabs.TabTitle>{item.title}</Tabs.TabTitle>
                                        </Tabs.Tab>
                                    ))}
                                </Tabs.List>
                                <Tabs.Pane>
                                    
                                    <Tabs.PaneList>
                                        {FeaturesTabs.map(item => filterPanes(item))}
                                    </Tabs.PaneList>
                                </Tabs.Pane>
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
