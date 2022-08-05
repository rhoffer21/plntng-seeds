import logo from './logo.jpg';
import darklogo from './darklogo.jpg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const images = [logo, darklogo];
  const [currentIndex, setCurrentIndex] = useState(0);
  let image;
  let bg;

  useEffect(() => {
    if (currentIndex || !currentIndex) {
        const timeoutID = setTimeout(() => {
          setCurrentIndex(currentIndex === 0 ? 1 : 0);
        }, 100);
        return () => clearTimeout(timeoutID);
    }
  });
  
  if(currentIndex){
    image = <img className="logo" alt="logo" src={logo} />
    bg = 'white'
  }else{
    image = <img className="logo invert" alt="logo" src={logo}/>
    bg = 'black'
  }
  return (
    <div className="App">
        <div className={bg}>
          {image}
        </div>
    </div>
    
  );
}

export default App;
