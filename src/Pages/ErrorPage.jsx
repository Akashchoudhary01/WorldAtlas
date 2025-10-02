import React from 'react'
import errorPage from '../assets/errorPage.png'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='h-lvh w-full flex flex-col items-center justify-center bg-amber-50'>
        <img className='w-7xl'
        src={errorPage} alt="" />
        <NavLink to={'/'}>

        <button className='absolute bottom-25 px-4 py-1.5 text-xl  rounded-xl outline-2 active:text-zinc-900 '>Go back</button>
        </NavLink>
      
    </div>
  )
}