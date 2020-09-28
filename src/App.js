import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar.jsx'
import Content from './components/contents/contents'
import Header from './components/contents/Header/Header2.jsx'
import Intro from './components/contents/firtsIntro/intro.jsx'
import Experiance from './components/contents/Experience/Experience.jsx'
import Education from './components/contents/Education/Education.jsx'
import Skills from './components/contents/Skills/Skills.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <div className="cont-contents">
        <Header />
        <Intro/>
        <Experiance />
        <Education />
        <Skills/>
        <Content id={"6"}/>
      </div>
    </div>
  );
}

export default App;
