import React from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBars } from '@fortawesome/free-solid-svg-icons'
 import { useState } from 'react'

function Header() {

  const [displayBar,setDisplayBar] = useState(false)

  const navBarHandler = () => {
    setDisplayBar(!displayBar)
  }

   
  return (
    <> 
     <header className='flex justify-between'>
        <div className='flex header-left'>
          <img src="src/assets/Images/11-removebg-preview.png" alt="" />
          <p className='logo-name'>VenueRings</p>
        </div>
        <div className={displayBar ? `header-right flex active`:`header-right flex`}>
          <p>Explore Venues</p>
          <p> Featured Spots</p>
          <p>Destinations</p>
          <p>Expert Advice</p>
          <p>Subscribe</p>
          <p>Saved Venues</p>
        </div>
        <FontAwesomeIcon icon={faBars} className='nav-bar' onClick={navBarHandler} />
     </header>

 
    </>
  )
}

export default Header