import React from 'react'
import Navbar from './navigation/Navbar'

export default function Hero({title,subtile}) {
  return (
    <div className=''>
      <Navbar/>
        <p>{title}</p>
        <p>{subtile}</p>
    </div>
  )
}
