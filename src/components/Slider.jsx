import React from 'react'
import data from '../server/venueDetails'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='slider-main'>
    <Slider {...settings}>
       { data.map((item)=> (
           <section className='slider-card'>
           <img src={item.img} alt="" />
             <h1>{item.name}</h1>
             <p>{item.location}</p>
          </section>
       ))}
    </Slider>
    </div>
    </>
  )
}

export default Sliders