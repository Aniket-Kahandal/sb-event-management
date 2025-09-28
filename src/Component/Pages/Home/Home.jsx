import React from 'react'
import Banner from './Banner'
import OurServices from './OurSerives'
import Clients from './ClientReview'

import { useInView } from 'react-intersection-observer'
import StatsSection from '../StatsSection/StatsSection'
import HowWeWork from '../HowItWorks/HowWeWork'
import LazyRender from '../../LazyRender'

const Home = () => {

  return (
    <>
      <div>
        {/* Banner Component */}


        <LazyRender><Banner /></LazyRender>
        <LazyRender><OurServices /></LazyRender>
        <LazyRender><Clients /></LazyRender>
        <LazyRender><StatsSection /></LazyRender>
        <LazyRender><HowWeWork /></LazyRender>



      </div>

    </>
  )
}

export default Home