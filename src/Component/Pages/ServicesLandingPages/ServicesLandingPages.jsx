import React from 'react'
import BannerSection from './BannerSection'
import Clients from '../Home/ClientReview'
import wedding from '../../../Asset/Images/wdding.jpg'
import birthdayImage from '../../../Asset/Images/birthdayImage.jpg'
import enagementring from '../../../Asset/Images/enagementring.jpg'
import retirement from '../../../Asset/Images/retirement.jpg'
import lights from '../../../Asset/Images/lights.jpg'
import soundImage from '../../../Asset/Images/soundImage.jpg'
import OurServices from '../Home/OurSerives'
import WhyChooseUs from './WhyChooseUs'


const ServicesLandingPages = () => {
  return (
    <>
      <BannerSection/>
    <OurServices/>
    <WhyChooseUs/>
    <Clients/>
    </>
  )
}

export default ServicesLandingPages
