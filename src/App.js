import logo from './logo.svg';
import './App.css';
import {AiOutlineStar } from 'react-icons/ai'
import React, { useState } from 'react';

function CreateArray(number=5){
  return [...Array(number)];
}

function Star({key, setClick, color }){
  return(
    <AiOutlineStar fill={color} onClick={setClick}/>
  )
}

function StarRating({starNumber}){

  let [click, setClick] = useState(0);
  let array = CreateArray(starNumber);

  return(
    <div>
    
      {
        array.map((n, i) => 
         
         <Star key={i} setClick={() => setClick(i+1)} color={ i<click?'red':'gray'}/>
        )
      }
      
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <StarRating starNumber={10}/>
    
    </div>
  );
}

export default App;
