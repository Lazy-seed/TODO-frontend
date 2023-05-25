import React from 'react'
import './navbar.scss'
import avatar from './avatar.png'

export default function Navbar() {
  return (
    <div className='navbar'>
    <div className="left"><h2>LazySeed</h2></div>

    <div className="right">
        <img src={avatar} alt="" srcset="" />
    </div>
    </div>
  )
}