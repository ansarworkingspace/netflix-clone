import React from 'react'
import './bhome.css'
const bhome = () => {
  return (
    <div className='bannerhome'>
       <h1 className='banner-text-large'>Unlimited movies, TV shows and more</h1>
      <p className='banner-text-small'>Watch anywhere. Cancel anytime.</p>
      <p className='banner-text-small'>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='input-container'>
        <input type='text' placeholder='Enter your email' className='email-input' />
        <button className='get-start-button'>Get Started</button>
      </div>
    </div>
  )
}

export default bhome
