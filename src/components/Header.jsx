import React from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBars } from '@fortawesome/free-solid-svg-icons'
 import { useState } from 'react'
import { Link } from 'react-router-dom'

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
         <Link to={'/'}> <p className='logo-name'>VenueRings</p></Link>
        </div>
        <div className={displayBar ? `header-right flex active`:`header-right flex`}>
           
        <Link to={'/contentView'}> <p>Destinations</p></Link>
          <Link to={'/expertAdvice'}><p>Expert Advice</p></Link>
        <Link to={'/subscribe'}>  <p>Subscribe</p></Link>
          <Link to={'/addVenue'}><p>Wish to add your venue</p></Link>
        </div>
        <FontAwesomeIcon icon={faBars} className='nav-bar' onClick={navBarHandler} />
     </header>

 
    </>
  )
}

export default Header