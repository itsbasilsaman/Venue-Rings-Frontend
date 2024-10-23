import { useState  } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 


function Subscribe() {

  const [checkInvalid,setCheckInvalid] = useState(true)
  const [userDetails,setUserDetails] = useState({
    name:'',
    email:''
  })
  const [subComplete,setSubComplete] = useState(false)
 
   
 
  

  let emailInputHandler =(e) => {
       setUserDetails({...userDetails,email:e.target.value})
      if(!!e.target.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')){
        setCheckInvalid(true)
        console.log(checkInvalid);
      } else {
        setCheckInvalid(false)
      }
  }

  let joinHandler =  ()=> {
    if(!userDetails.email.endsWith('@gmail.com')){
      setCheckInvalid(false)
    } else {
       if(userDetails){
         toast.success(`Submission complete! Thank you.`)
         setSubComplete(true)
       } else {
         toast.error('Invalid details. Try again')
       }
       
       setUserDetails({
        name:'',
        email:''
       })
       
    }
  }

  const checkKeyEntered = (event)=> {
    if(event.key == 'Enter'){
      joinHandler()
    }
  }

 
 

 
  
  

  return (
    <>
     <main className='w-full h-screen subscribe-page'>
      <section className='subscribe-left'></section>
      <section className='flex flex-col p-[80px] subscribe-right'>
        <h1 className='subscribe-head'>Get Wedding   Inspiration to  your Inbox</h1>
        <p>Join our bi-monthly email newsletter full of our latest wedding planning articles and guide, real wedding inspiration and our hottest new wedding venues! </p>
      {subComplete ?<div className="flex justify-center items-center p-[30px]">
        <p>Thank you for subscribing! We’ll keep you updated with our latest news</p>
      </div> : <div>
           <input type="text" placeholder='Your Name' value={userDetails.name} onChange={(e)=> setUserDetails({...userDetails,name:e.target.value}) } onKeyDown={checkKeyEntered} />
         <div className='email-address'>
         {  !checkInvalid ?  <input type="text" style={{border:'1px solid red'}} placeholder='Email Address' value={userDetails.email} onChange={emailInputHandler} onKeyDown={checkKeyEntered} /> : <input type="text" placeholder='Email Address' value={userDetails.email} onChange={emailInputHandler} onKeyDown={checkKeyEntered} />}
          { !checkInvalid && <p className='invalid-content text-red-900'  >Email is Invalid</p>}
         </div>
        <div className="flex justify-center items-center"> { !checkInvalid ? <button style={{backgroundColor:'rgb(86, 86, 86)'}} className='join-button text-white '>Join Now</button> : <button className='join-button text-white ' onClick={joinHandler} >Join Now</button>}</div>
       </div>}
      </section>
     </main>
     <ToastContainer position="top-center" autoClose={1000} theme='light' />
     
    </>
  )
}

export default Subscribe