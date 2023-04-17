import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  AboutMe  from './pages/AboutMe';
import  Contact  from './pages/Contact'
import  Projects  from './pages/Projects'
import  Resume  from './pages/Resume'
import TopOfPage from './components';
import StreamersDen from './assets/images/StreamersDen.png';
import Gamemap from './assets/images/Gamemap.jpg';
import inQUIZator from './assets/images/inQuizator.png';

const projects = [
  {
      title: `Streamer's Den`,
      imageUrl: StreamersDen,
      resources: 'HMTL, JS, CSS, Youtube Iframe API',
      description: 'A Streamer website where they can more easily control what content their fans see',
      githubURI: 'https://github.com/IzzyBrassell/iCarly-project-1', 
  },
   {
      title: `Fortress Defense`,
      imageUrl: Gamemap,
      resources: 'HMTL, JS, CSS, Node, Express, Sequelize',
      description: 'A Tower Defense Video Game that will soon have the feature to save High Scores and view a Leaderboard',
      githubURI: 'https://github.com/IzzyBrassell/Fortress-Defense', 
  },
   {
      title: `inQUIZator`,
      imageUrl: inQUIZator,
      resources: 'JS, HTML, CSS',
      description: 'A quiz taking test where highscores are recorded and time can be deducted for wrong answers',
      githubURI: 'https://github.com/elmerherrera/inQUIZator', 
  },
]

function App() {
  return (
    <Router>
      <TopOfPage /> 
        <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path="/Aboutme" element={<AboutMe/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Projects" element={<Projects projects={projects} />} />
        <Route path='/Resume' element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;
