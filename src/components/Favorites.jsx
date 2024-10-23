import React from 'react'
import { getAllFavoriteItemsApi, removeFavoriteItemsApi } from '../server/allApi'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import noFavorite from '../assets/Images/nofavorite.png'

function Favorites() {

  const [allFavItems,setAllFavItems] = useState([])
  const [delelteRefresh,setDeleteRefresh] = useState({})

  const getAllFavoriteItems = async ()=> {
    const result = await getAllFavoriteItemsApi()
    setAllFavItems(result.data)
    console.log(result.data);
    
  }

  const handleDelete = async (id)=> {
    const result = await removeFavoriteItemsApi(id)
    setDeleteRefresh(result.data);  
  }

  
  

  useEffect(()=> {
    getAllFavoriteItems()
  },[delelteRefresh])

  return (
    <>
         <div className='venue-main'>
          
            {allFavItems?.length > 0 ?  allFavItems.map((item)=> (
               <section className='venue-section'>
               <div className='relative'>
                <img src= {item.imglink} alt="" />
                <FontAwesomeIcon icon={faTrash} className='text-[24px] absolute text-white faHeart cursor-pointer' 
                    onClick={()=>handleDelete(item?.id)}
               /> 
               </div>
              
               <h1>{item.name}</h1>
               <h4>{item.location}</h4>
               <p> Up to {item.guest}</p>
             </section>
            )) :
           <div className='w-full  flex justify-center items-center h-[350px]'>  <img src={noFavorite} alt=""  /></div>
           }
      
   
      </div>
    </>
  )
}

export default Favorites