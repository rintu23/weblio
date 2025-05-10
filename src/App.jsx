import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import ServicesSection from './Services/Services'
import Footer from './Footer/Footer'
import AboutSection from './About/About'
import ContactPage from './Contact/Contact'
import { useEffect } from 'react';



function App() {
 
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
     <Navbar/>
     <Home/>
     <ServicesSection/>
     <AboutSection/>
     <ContactPage/>
     <Footer/>
    </>
  )
}

export default App
