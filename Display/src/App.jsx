import React from 'react';
import './App.css';
import Header from './Components/Header';
import { faTh, faWrench, faClock, faGift, faGem } from '@fortawesome/free-solid-svg-icons';
import Img from './Components/Img';

function App() {
  return (
    <>
    <div className="App">
     <Header />
    </div>
    <div className='Img'>
      <Img/>
    </div>
    </>
  );
}

export default App;
