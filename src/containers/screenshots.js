import React from 'react'
import { Section, ScreenshotsSlider } from '../components'
function ScreenshotsContainer() {
    return (
        <Section bgColor='#f4f7fa'>
            <div className='container'>
                <Section.Item>
                    <Section.Text>
                        <Section.Title>App screenshots<br /> <Section.RegularWeight>Looks awesome</Section.RegularWeight></Section.Title>
                        <Section.Lead>Credibly synthesize multimedia based networks vis-a-vis top-line growth strategies. Continually leverage existing worldwide interfaces</Section.Lead>
                    </Section.Text>
                </Section.Item>
                <ScreenshotsSlider />
            </div>
        </Section>
    )
}

export default ScreenshotsContainer
