import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddUserInfoApi } from '../server/allApi';
import { useNavigate } from 'react-router-dom';
import people from '../assets/Images/people.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function AddStyle( ) {
  const [clickedStyle, setClickedStyle] = useState(null);
  const [secondStyle, setSecondStyle] = useState(null);
  const [selectedItems,setSelectedItems] = useState({
    destination:'',
    guest:'',
    name:'',
    location:'',
    imgUrl:''
  })
  const [nextContent,setNextContent] = useState(false)

  const navigate = useNavigate()


  const handleClick = (index,name) => {
    // Toggle the clicked style
    setClickedStyle(clickedStyle === index ? null : index);
    setSelectedItems({...selectedItems,destination:name})
  };

  const secondHandleClick = (index,name) => {
    // Toggle the clicked style
    setSecondStyle(secondStyle === index ? null : index);
    setSelectedItems({...selectedItems,guest:name})
  };

  const styleContent = [
    {  name:'Villa'} , {  name:'Urban'},{  name: 'Terrace'}, {  name:'Island'}, { name:'Beach'}, 
    { name:'Sea View'}, { name:'Chateau'}, { name:'Authentic'}, {name:'Castle'}, { name:'Countryside'}, 
    {  name: 'Resort'}, {  name:'Vineyard'}
  ];
  const Guests = [
    '2-10', '10-30', '30-50', '50-80', '80-100', 
      '100-150', '150-200', 
    '200+', 'Not Sure'
  ];

  const handleNext = async () => {
    if(selectedItems.destination == '' && selectedItems.guest == ''){
        toast.warn('Please select items!')
    }  else {
      await AddUserInfoApi(selectedItems)
      toast.success('Details entered successfully')
      setTimeout(()=> {
        navigate('/contentView')
      }, 2000)
    }   
  }

  const submitHandler = async ()=> {
    if(selectedItems.name == '' || selectedItems.location == '' || selectedItems.imgUrl == ''){
      toast.warn('Please fill the details!')
    } else {
      
      toast.success('Processing your details, please wait..')
      setTimeout(()=> {
        setNextContent(true)
      }, 2000)
    }
    
  }

  return (
   <>
     { nextContent ? 
     <>
      <h1 className='text-center text-[21px] pt-[40px]'>Enter Your Business Offerings</h1>
     <main className='style-page'>
        <div className='style-box one'>
          {styleContent.map((style, index) => (
            <section 
              key={index}
              className="style-content" 
              style={{ backgroundColor: clickedStyle === index ? 'lightblue' : 'transparent' }} 
              onClick={() => handleClick(index,style)}
            >
             <div className='flex flex-col items-center justify-center'>
             <FontAwesomeIcon icon={faEarthAmericas} className='text-[21px] pb-[9px]' />  
               <p> {style.name}</p>
             </div>
            </section>
          ))}
        </div>
        <div className='style-box two'>
        {Guests.map((style, index) => (
            <section 
              key={index}
              className="style-content" 
              style={{ backgroundColor: secondStyle === index ? 'lightblue' : 'transparent' }} 
              onClick={() => secondHandleClick(index, style)}
            >
             <div className='flex flex-col items-center justify-center'>
                 <img src={people} alt="" style={{width:'50px'}} />  
               <p> {style}</p>
             </div>
            </section>
          ))}
        </div>
        <button className='next-button' onClick={handleNext}>Next</button>
       
      </main>
     </>
      
      
      
      
      : <main className='user-details'>
      <section className='flex flex-col items-center'>
        <h1 className='user-title'>Become a Part of Our Community</h1>
        <div className='flex gap-[15px] input-bar'>
        <input type="text" placeholder='Your Name' className='input-field item' />
        <input type="text" placeholder='Contact Number' className='input-field item' />
       
        </div>
       <div className='flex gap-[15px] mb-[8px] input-bar'>
          <input type="text" placeholder='Email Address' className='input-field item' />
          <div className='input-field'>
           
            <input type="text" placeholder='Event Name' onChange={(e)=> {setSelectedItems({...selectedItems,name:e.target.value})}} />
          </div>
       </div>
      <div className='flex gap-[15px] input-bar'>
          <div className='input-field'>
          
            <input type="text" placeholder='Event Location' onChange={(e)=> {setSelectedItems({...selectedItems,location:e.target.value})}} className='event-location' />
          </div>
          <div className='input-field'>
   
            <input type="text" placeholder='Event Image' onChange={(e)=> {setSelectedItems({...selectedItems,imgUrl:e.target.value})}}  />
          </div>
      </div>
         <p className='text-area-title'>What’s unique about your venue, and why do you want to become a member?</p>
         <textarea name="" id="" className='text-area'></textarea>
        <button className='button' onClick={submitHandler}>Apply Now</button>
      </section>
      <section className='design-section'>

      </section>
     </main> }
      <ToastContainer position="top-center" autoClose={1500} theme='light' />
   </>
  );
}

export default AddStyle;
