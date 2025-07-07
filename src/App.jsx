import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './components/Home';

import Contact from './components/Contact';

import ImageSlider from './components/ImageSlider';
import './App.css'

function App() {

  return (
   <div>
    
    <Home/>
    <ImageSlider />
    <Contact/>

    

   
   </div>
  );
}

export default App
