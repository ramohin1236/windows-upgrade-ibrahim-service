import HeroSection from '@/components/home/HeroSection'
import HowWorks from '@/components/home/HowWorks'
import PopularCategory from '@/components/home/PopularCategory'
import PopularService from '@/components/home/PopularService'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <PopularCategory/>
      <PopularService/>
      <HowWorks/>
    </div>
  )
}

export default HomePage