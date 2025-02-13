import React from 'react'
import Hero from './Hero'
import ComparisonSection from './Comparisonsec.jsx'
import Timeline from './Workflow'
import HeroSection from './Herosec2'
import Footer from './Footer'
function Landingpage() {
  return (
    <div>
     <Hero/>
    <ComparisonSection/> 
    <hr />
  <Timeline/>
  <hr />
  <HeroSection/>
  <Footer/>
    </div>
  )
}

export default Landingpage
