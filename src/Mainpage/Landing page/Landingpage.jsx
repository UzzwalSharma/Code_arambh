import React from 'react'
import Hero from './Hero'
import ComparisonSection from './Comparisonsec.jsx'
import Timeline from './Workflow'
import HeroSection from './Herosec2'
import IntegrationsCarousel from './IntegrationsCarousel'
import Footer from './Footer'
function Landingpage() {
  return (
    <div>
     <Hero/>
    <ComparisonSection/> 
   
    <hr className='text-gray-400' />
    <IntegrationsCarousel/>
    <hr  className='text-gray-400'/>
    <Timeline/>

  <hr />
  <HeroSection/>

  <Footer/>
    </div>
  )
}

export default Landingpage
