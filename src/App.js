import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Profile from "./Components/Content";





const App=() =>{
  return (
   <div className="app-wrapper">
     <Header/>
     <Nav/>
     <Profile/>
   </div>

  );
}

export default App;
