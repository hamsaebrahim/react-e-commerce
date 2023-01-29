import './App.css';
import { Route, Routes } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab ,faFacebookF ,faInstagram ,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope  ,faMagnifyingGlass ,faCartShopping , faUser , faMapPin ,faTruck , faRightLeft ,faPercent} from '@fortawesome/free-solid-svg-icons'
import Firstnav from './component/Firstnav';
import Secondnav from './component/Secondnav';
import Footer from './component/Footer.js';
import Home from './Home'
import About from "./About"
import Contact from './contact';
import Shop from './shop';
import { BrowserRouter } from 'react-router-dom'


library.add( fab,faPhone, faEnvelope ,faTwitter , faInstagram ,faFacebookF ,faMagnifyingGlass,faCartShopping ,faUser , faMapPin ,faTruck ,faRightLeft,faPercent)
function App() {
  return (
    <BrowserRouter>
    <div className="App">


      <Firstnav/>
      <Secondnav/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/about' element={<About/>}/>  
        <Route path='/contact' element={<Contact/>}/>  
        <Route path='/shop' element={<Shop/>}/>  
      </Routes>
      <Footer/>
  

    </div>
    </BrowserRouter>
  );
}

export default App;
