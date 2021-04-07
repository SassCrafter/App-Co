import React from 'react'
import HeaderContainer from '../containers/header'
import HeroContainer from '../containers/hero'
import PromoContainer from '../containers/promo'
import AboutContainer from '../containers/about'
import FeaturesContainer from '../containers/features'
import DownloadContainer from '../containers/download'
import PricingContainer from '../containers/pricing'

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
        </>
    )
}

export default Home
