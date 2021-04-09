import React from 'react'
import HeaderContainer from '../containers/header'
import HeroContainer from '../containers/hero'
import PromoContainer from '../containers/promo'
import AboutContainer from '../containers/about'
import FeaturesContainer from '../containers/features'
import DownloadContainer from '../containers/download'
import PricingContainer from '../containers/pricing'
import TestimonialsContainer from '../containers/testimonials'
import ScreenshotsContainer from '../containers/screenshots'
import TeamContainer from '../containers/team'
import ContactContainer from '../containers/contact'

function Home() {
    return (
        <>
          <HeaderContainer />
          <HeroContainer />
          <PromoContainer />
          <AboutContainer />
          <FeaturesContainer />
          <DownloadContainer />
          <PricingContainer />
          <TestimonialsContainer />
          
          <TeamContainer />
          <ContactContainer />
        </>
    )
}

export default Home
