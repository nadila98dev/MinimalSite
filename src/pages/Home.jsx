import React from 'react'
import HeroComponent from '../components/Home/HeroComponent'
import HomeSection from '../components/Home/HomeSection'

const Home = () => {
  return (
    <div className='w-full h-full bg-primarybg flex flex-col justify-between my-[70px] '>
        <HeroComponent />
        <HomeSection />
    </div>
  )
}

export default Home