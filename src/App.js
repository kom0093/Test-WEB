import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Photos from './components/Photos';


function App() {

  return (
    <>
    <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        
       {
       /* pro hodne jazyku
       Object.keys(lngs).map((lng) => (
            <i key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </i>
       ))*/}
      <Router>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/gallery' element={<Photos />}/>
        </Routes>
        <Footer />
      </Router>
   
    </>
      
  );
}

export default App;
