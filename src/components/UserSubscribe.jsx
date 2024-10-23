import React from 'react'
import { Link } from 'react-router-dom'
import VenueImage from '../assets/Images/venue.jpg'

function UserSubscribe() {
  return (
    <>
    <div className='subscribe-container'>
      <section className='subscribe-card'>
        <div className='text-part'>
          <p >Let the adventure begin</p>
          <h1>Showcase Your Venue and Attract More Weddings by Joining Us!</h1>
         <Link to={'/subscribe'}> <button>Connect Now</button></Link>
        </div>
        <div className='img-part'>
           <img src={VenueImage} alt="" />
        </div>
      </section>
    </div>
    </>
  )
}

export default UserSubscribe