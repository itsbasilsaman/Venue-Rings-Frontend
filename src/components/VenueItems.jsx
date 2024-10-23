import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { addFavoriteApi } from '../server/allApi';
function VenueItems({events,setAddFavoriteStatus,venuesInCountry,checkCountrySearch}) {
 
  const [itemsArray,setItemsArray] = useState(Array(events.length).fill(false));


  const favoriteClick = async (indexVal) => {
    const arrayContent = [...itemsArray]
    arrayContent[indexVal] = !arrayContent[indexVal]
    setItemsArray(arrayContent) 
        const reqBody = {
        name: events[indexVal]?.name,
        location: events[indexVal]?.location,
        guest: events[indexVal]?.guest,
        imglink:events[indexVal]?.imgUrl
       }  

       const result = await addFavoriteApi(reqBody)
          console.log(result.data);
          setAddFavoriteStatus(result.data)
    }
  return (
    <> 
     <div className='venue-main'>
         {checkCountrySearch ? venuesInCountry.length > 0 ? venuesInCountry.map((showItems,index)=> (
             <section className='venue-section'>
             <div className='relative'>
              <img src={showItems.imgUrl} alt="" />
              <FontAwesomeIcon icon={faHeart} className='text-[24px] absolute text-white faHeart cursor-pointer' 
               style={{color: itemsArray[index]?'red':'white'}}
               onClick={()=>favoriteClick(index)}
               />
               { itemsArray[index] && <p className='absolute  bg-white uppercase favorite-text font-semibold px-[14px] py-[4px] rounded-full animate-slide'>Added to favorite</p>}
             </div>
            
             <h1> {showItems.name}</h1>
             <h4> {showItems.location}</h4>
             <p> Up to {showItems.guest}</p>
           </section>
         )) : <div>No Items Picked</div>
         
         :

         events.length > 0 ? events.map((showItems,index)=> (
          <section className='venue-section'>
          <div className='relative'>
           <img src={showItems.imgUrl} alt="" />
           <FontAwesomeIcon icon={faHeart} className='text-[24px] absolute text-white faHeart cursor-pointer' 
            style={{color: itemsArray[index]?'red':'white'}}
            onClick={()=>favoriteClick(index)}
            />
            { itemsArray[index] && <p className='absolute  bg-white uppercase favorite-text font-semibold px-[14px] py-[4px] rounded-full animate-slide'>Added to favorite</p>}
          </div>
         
          <h1> {showItems.name}</h1>
          <h4> {showItems.location}</h4>
          <p>{showItems.guest} Guests</p>
        </section>
      )) : <div>No Items Picked</div> }
   
      </div>
    </>
  )
}

export default VenueItems