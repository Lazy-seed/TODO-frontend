import React from 'react'
import './navbar.scss'
import avatar from './avatar.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='./home'>
          <h2>LazySeed</h2></Link></div>

      <div className="right">
        <Link to='./login'>
          <img src={avatar} alt="" srcset="" />
        </Link>
      </div>
    </div>
  )
}