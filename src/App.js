import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar.jsx'
import Content from './components/contents/contents'
import Header from './components/contents/Header/Header2.jsx'
import Intro from './components/contents/firtsIntro/intro.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <div className="cont-contents">
        <Header />
        <Intro/>
        <Content id={"3"}/>
      </div>
    </div>
  );
}

export default App;
