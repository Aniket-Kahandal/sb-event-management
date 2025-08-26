import React from 'react'
import Banner from './Banner'
import OurServices from './OurSerives'
import Clients from './ClientReview'

import { useInView } from 'react-intersection-observer'
import StatsSection from '../StatsSection/StatsSection'

const Home = () => {
   const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.2, // Trigger when 20% of the element is in the viewport
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: clientsRef, inView: clientsInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
   <>
  <div>
        {/* Banner Component */}
        <div ref={bannerRef}>
          {bannerInView && <Banner />} {/* Render Banner only when in view */}
        </div>

        {/* Our Services Component */}
        <div ref={servicesRef}>
          {servicesInView && <OurServices />} {/* Render OurServices only when in view */}
        </div>

        {/* Clients Component */}
        <div ref={clientsRef}>
          {clientsInView && <Clients />} {/* Render Clients only when in view */}
        </div>

        {/* Clients Component */}
        <div ref={clientsRef}>
          {clientsInView && <StatsSection />} {/* Render Clients only when in view */}
        </div>

        {/* <Footer /> */}
      </div>
  
   </>
  )
}

export default Home