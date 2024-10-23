import React from 'react'
import MainBg from '../assets/Images/main-background.jpg'

function ExpertAdvice() {
  return (
    <>
    <main className='expertadvice-page'>
      {/* head part */}
      <div className='head-part'>
        <h1>Select Your Space</h1>
        <p>Choose From Multiple Locations</p>
      </div>
      {/* second part */}
      <div className='second-part'>
          <img src= {MainBg} alt="No Image"/>
          <div className='second-title-part'>
            <h1>What venue styles<br />and locations resonate most with   your preferences?</h1>
            <p>Explore a variety of unique spaces that cater to all styles. Whether you envision a charming outdoor garden, a sophisticated ballroom our platform helps you discover the ideal venue.</p>
          </div>
      </div>
    </main>
    </>
  )
}

export default ExpertAdvice