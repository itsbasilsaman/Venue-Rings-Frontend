import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebook,faLinkedin,faSquareSnapchat } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <footer>
        <h1 className='text-center text-4xl'>Venue Rings</h1>
        <p className='text-center uppercase text-[13px] pb-[40px]'>Complete Your Wedding Vision Here</p>
        <section className='flex justify-center items-center footer-text-container'>
          <div className='description-section'>
          Venuerings is a comprehensive platform that bridges the gap between wedding planners and venue owners. We specialize in helping couples find their dream wedding venues through personalized location recommendations. Whether it's a luxurious ballroom or a serene outdoor setting, we make the process seamless and enjoyable - <span className='description-head'> About Venuerings</span><br />
          <br />
          
          We empower venue owners to grow their businesses by partnering with us. Add your venue to our platform and get discovered by couples actively seeking the perfect spot for their special day. Manage your venue details easily and reach a larger audience through Venuerings - <span  className='description-head'> Venue Owners</span></div>
          <div className='description-section responsive-remove'>
        
          Our customer support team is dedicated to providing a hassle-free experience. Have questions or need help with venue selection? We're here to assist you every step of the way. Reach out via email or phone for personalized guidance and assistance -<span  className='description-head'> Customer Support</span> <br />
           <br /> <br />
           Stay in touch with us on social media to get the latest updates on new venues, special offers, and wedding planning tips. Follow us on Instagram, Facebook, and Twitter, or subscribe to our newsletter for exclusive insights and venue inspiration -
           <span className='description-head'> Stay Connected</span>
          </div>
        </section>
        <div className='end-footer'>
            <div>
            <h2 className='font-bold pb-[12px] uppercase'>For Venues</h2>
            <p>List your Venue</p>
            <p>Venue Login</p>
            <p>The Venue Hub</p>
            <p>About Us</p>
            <p>Terms of Use</p>
            </div>
            <div>
            <h2 className='font-bold pb-[12px] uppercase'>For Venues</h2>
            <p>List your Venue</p>
            <p>Venue Login</p>
            <p>The Venue Hub</p>
            <p>About Us</p>
            <p>Terms of Use</p>
            </div>
            <div>
            <h2 className='font-bold pb-[12px] uppercase'>For Venues</h2>
            <p>List your Venue</p>
            <p>Venue Login</p>
            <p>The Venue Hub</p>
            <p>About Us</p>
            <p>Terms of Use</p>
            </div>
            <div>
              <h1 className='font-bold pb-[12px] uppercase'>Inspiration</h1>
              <div className='flex justify-between w-[200px] py-[10px]'>
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faSquareSnapchat} />
              </div>
              <p className='py-[15px]'>Get ideas in your inbox</p>
             <div className='subscribe-footer-section'>
                <input type="text" className='py-[6px] px-[25px]'  placeholder='Email' />
                <button className='footer-button'>I'm In</button>
             </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer