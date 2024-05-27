import React from 'react';
import RandomImage from './Components/RandomImage';
import Header from './Components/Header';
import './App.css';
const App = () => {
  return (
    
    <div>
      <Header/>
      {/* <h1>Random Nature Image</h1> */}
      <RandomImage />
    </div>
  );
};

export default App;
