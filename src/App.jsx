import {  Route,  Routes ,  useLocation} from 'react-router-dom'
 
import AddStyle from './components/AddStyle'
import Header from './components/Header'
import ExpertAdvice from './Pages/ExpertAdvice'
import Subscribe from './Pages/Subscribe'
import ContentView from './components/ContentView'
import Footer from './components/Footer'
import Landing from './Pages/Landing'
import Favorites from './components/Favorites'

function App() {

 const location = useLocation();

 const hideHeader = location.pathname === '/subscribe'  || location.pathname === '/addVenue'

 const hideFooter =  location.pathname === '/subscribe' || location.pathname === '/addVenue'

  

 

  return (
    <>
     
   
    {/*  
    <ExpertAdvice/> */}


 
{!hideHeader && <Header />}
    <Routes>
       <Route path='/' element={<Landing/>} /> 
       <Route path='/addVenue' element={<AddStyle/>} /> 
       <Route path='/contentView' element={<ContentView/>} /> 
       <Route path='/subscribe' element={<Subscribe/> } /> 
       <Route path='/expertAdvice' element={ <ExpertAdvice/> } /> 
       <Route path='/favorites' element={ <Favorites/> } /> 

    </Routes>
   { !hideFooter && <Footer/>}
 
  
    </>
  )
}

export default App
