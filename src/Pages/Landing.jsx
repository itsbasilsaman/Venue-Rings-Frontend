import React from 'react'
import Sliders from '../components/Slider'
import IdeasAndAdvice from '../components/IdeasAndAdvice'
import Destinations from '../components/Destinations'
import ExpertAdvice from './ExpertAdvice'
import UserSubscribe from '../components/UserSubscribe'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <main className='landing-first-page '>
        <div className=' landing-title-section'>
          <h1>Remarkable <br />
          Wedding Venues.</h1>
          <p>Discover your unique wedding venue abroad</p> 
         <Link to={'/contentView'}> <button className='search-button'>Search Now</button></Link>
        </div>
        <div className='landing-first-image-section'></div>
    </main>
    <Sliders/>
    <ExpertAdvice/>
    <IdeasAndAdvice/>
    <UserSubscribe/>
     {/* <Destinations/> */}
    </>
  )
}

export default Landing