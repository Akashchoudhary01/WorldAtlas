import React from 'react'
import AboutApiData from '../Component/ApiData/AboutApiData'

export default function About() {
  return (
   <div className=' h-full w-full p-10'>
  
      <div className='max-w-5xl min-w-[20rem] text-white  m-auto'>
          <p className="text-lg   leading-relaxed">
          Our World Atlas is designed to help you explore countries, learn about
          cultures, and discover fascinating facts about our planet. Whether you’re
          curious about geography, history, or unique global stories, this platform
          brings the Earth closer to you.
        </p>
        <AboutApiData/>

    </div>
    </div>
  )
}