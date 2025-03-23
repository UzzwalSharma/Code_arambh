import React from 'react'
import Hero from './Hero'
import ComparisonSection from './Comparisonsec.jsx'
import Timeline from './Workflow'
import HeroSection from './Herosec2'
import IntegrationsCarousel from './IntegrationsCarousel'
import FAQs from './FAQs'
import WarningBanner from './WarningBanner'
import Footer from './Footer'
// import AnimatedTitle from './AnimatedTitle'
import Newhero from "./Newhero.jsx"
function Landingpage() {
  return (
    <div>
     <Hero/>
    <ComparisonSection/> 
   
    <hr className='text-gray-400' />
    <IntegrationsCarousel/>
    <hr  className='text-gray-400'/>

    {/* <AnimatedTitle
  title="How <b>Pixora</b> Works <br /> Convert sketches into <b>code</b> instantly"
  containerClass="mt-5 text-black text-center text-3xl font-bold"
/> */}
<Newhero/>
    <Timeline/>


  <WarningBanner/>
 
  <HeroSection/>
  <hr className='text-green-400'/>
  <FAQs/>
  <hr className='text-green-400'/>
  <Footer/>
    </div>
  )
}

export default Landingpage
