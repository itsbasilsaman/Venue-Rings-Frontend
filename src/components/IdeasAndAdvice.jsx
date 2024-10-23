import React from 'react'
import { adviceContents } from '../server/venueDetails'

function IdeasAndAdvice() {
  return (
    <div className='advice-container'>
      <h1 className='advice-head'> Inspiration & Advice</h1>
      <p>Looking for far-flung wedding creativity and guidance? We've got you covered.</p>
<div className='advice-card-section'>
  
        {adviceContents.map((item)=> (
            <div className='advice-card'>
            <img src={item.img} alt="" />
             <p className='card-title'>{item.title}</p>
             <h2>{item.description}</h2>
           </div>
        )) }
</div>
    </div>
  )
}

export default IdeasAndAdvice