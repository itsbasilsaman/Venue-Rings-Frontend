import React from 'react'

function ExpertAdvice() {
  return (
    <>
    <main className='expertadvice-page'>
      {/* head part */}
      <div className='head-part'>
        <h1>Wedding Planning Guides</h1>
        <p>Destination Weddings Blog</p>
      </div>
      {/* second part */}
      <div className='second-part'>
          <img src="src/assets/Images/main-background.jpg" alt=""/>
          <div className='second-title-part'>
            <h1>Farm Weddings <br /> Abroad: Say ‘I Do’ in <br /> Rustic Elegance</h1>
            <p>When you hear “farm wedding,” you might picture muddy fields and wellington boots—hardly the epitome of romance. But, take that concept overseas, and you’ll find…</p>
          </div>
      </div>
      {/* third part */}
      <div className='third-part'>
         <div className='contents'>
          <img src="src/assets/Images/pexels-caspersomia-27060172.jpg" alt="" />
          <p>Featured Venues</p>
          <h1>Mediterranean Charm at Petunia Ibiza: A Wedding Venue Like No Other</h1>
         </div>
         <div className='contents'>
          <img src="src/assets/Images/pexels-amineispir-15445088.jpg" alt="" />
          <p>Featured Venues</p>
          <h1>Mediterranean Charm at Petunia Ibiza: A Wedding Venue Like No Other</h1>
         </div>
         <div className='contents'>
          <img src="src/assets/Images/pexels-jonathanborba-3397027.jpg" alt="" />
          <p>Featured Venues</p>
          <h1>Mediterranean Charm at Petunia Ibiza: A Wedding Venue Like No Other</h1>
         </div>
         <div className='contents'>
          <img src="src/assets/Images/pexels-gizem-celebi-516416806-19069008.jpg" alt="" />
          <p>Featured Venues</p>
          <h1>Mediterranean Charm at Petunia Ibiza: A Wedding Venue Like No Other</h1>
         </div>
      </div>
    </main>
    </>
  )
}

export default ExpertAdvice