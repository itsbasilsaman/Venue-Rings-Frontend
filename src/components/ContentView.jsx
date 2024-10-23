import React, { useEffect } from 'react'
import { getEventApi } from '../server/allApi'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer,toast } from 'react-toastify'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import VenueItems from './VenueItems'
import { Link } from 'react-router-dom'
function ContentView( ) {
  
  const [events,setEvents] = useState([])
  const [addFavoriteStatus,setAddFavoriteStatus] = useState({})
  const [countrySearch,setCountrySearch] = useState('')
  const [venuesInCountry,setvenuesInCountry] = useState([])
  const [checkCountrySearch,setcheckCountrySearch] = useState(false)

  const getAllEvents = async () => {
    const result = await getEventApi()
    setEvents(result.data)
  }

  const countrySearchHandler =  ()=> {
     const  country =  events.map((item)=> item.location.toLowerCase())
     
     console.log(country);
     
     
     if(country.includes(countrySearch)){
      console.log('yes');
      const venuesIn = events.filter(venue => venue.location.toLowerCase().includes(countrySearch.toLowerCase()));
      setvenuesInCountry(venuesIn);     
      setcheckCountrySearch(true)
     } else {
      console.log('no');
       toast.warn('Invalid country name. Please check your spelling.')
     }
  }

  console.log(events);
  
 

  useEffect(()=> {
    getAllEvents()
  },[addFavoriteStatus])
  
 
  
  return (
   <>
      <div className='content-view-header'>
           <div></div>
           <div className='header-left flex'>
          <div>
             <div className='relative '>
               <input type="text" placeholder='Enter Country' onChange={(e)=> setCountrySearch(e.target.value) }  />
              <span className='input-content absolute font-semibold text-[18px]'>Where?</span>
              <button className='absolute input-search text-[18px]' onClick={countrySearchHandler}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
             </div>
          </div>
            
           <Link to={'/favorites'}> <button className='text-[18px] px-[28px] py-[10px]  bg-white ml-[35px] rounded-full favorite-link'><FontAwesomeIcon icon={faHeart} className='mr-[6px]' />Favorites</button> </Link>
           </div>
      </div>
     <VenueItems events={events} setAddFavoriteStatus={setAddFavoriteStatus} venuesInCountry={venuesInCountry} checkCountrySearch={checkCountrySearch} />
     <ToastContainer position="top-center" autoClose={1800} theme='light' />
   </>
  
  )
}

export default ContentView