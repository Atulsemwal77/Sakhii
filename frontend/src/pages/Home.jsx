import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/About'
import Health from '../components/Helth'
import Banner from '../components/Banner'
import BannerSecond from '../components/BannerSecond'
import Testimonial from '../components/Testimonial'
import CommunitySection from '../components/Community'
import FaqSection from '../components/Faq'

const Home = () => {
  return (
    < >
    <div className='border max-w-screen-2xl mx-auto'>
    <Hero/>
    <AboutSection/>
    <Health/>
    <Banner/>
    <BannerSecond/>
    <Testimonial/>
    <CommunitySection/>
    <FaqSection/>
    
    </div>
    </>
  )
}

export default Home