import React from 'react';
import './App.css';
import ContentProf from './components/Contentprof';
import Header from './components/Header';
import Navbar from './components/Nav';




const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <ContentProf/>
    </div>
  );
}
export default App;
