import React from 'react'
import errorPage from '../assets/errorPage.png'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-amber-50 text-center px-4">
      
      {/* Error Image */}
      <img 
        className="max-w-xs md:max-w-md mb-6 drop-shadow-lg" 
        src={errorPage} 
        alt="Error Page" 
      />

      {/* Message */}
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
        Oops! Page Not Found 😢
      </h1>

      {/* Go Back Button */}
      <NavLink to={'/'}>
        <button className="px-6 py-2 text-lg font-medium rounded-xl bg-orange-500 text-white shadow-md hover:bg-orange-600 active:scale-95 transition duration-200">
          Go Back
        </button>
      </NavLink>
    </div>
  )
}
