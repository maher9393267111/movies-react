import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar() {
  return (
    <div>
<nav className='  h-[100px] relative align-middle  text-white font-bold text-xl  opacity-2  bg-gray-500'>
  
  <ul className='nav-items h-full relative top-3  grid container  grid-cols-7  opacity-[0.9]'>
    
  
  
  <li className='ml-[8px]'>  <Link to={'/'}>Home</Link>  </li>
  <li> <Link to={'/cinamalar'}>cinamalar</Link> </li>
  <li>filimler</li>
  <li>galleri</li>
  <li> ileteisim</li>
  <li> pazarlama</li>
  
  <li className='mr-[8px]  mt-[10px]'> <img src="https://www.cinemarine.com.tr/images/dolbyatmos.svg" alt=""/></li>
  
  </ul>
  
  </nav>



    </div>
  )
}
