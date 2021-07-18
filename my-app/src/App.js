import './App.css';
import React from 'react';
import Playlist from './components/playlist';
import Box from './components/Box'

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <div className='all'>
      <div className='container'>
      <Link className='destination' to="/nyc">New York City </Link>
      <Link className='destination' to="/maldives">Maldives </Link>
      <Link className='destination' to="/machupicchu">Machu Picchu </Link>
      <Link className='destination' to="/Paris">Paris </Link>
      </div>
      </div>
        <Switch>
       
          <Route exact path="/nyc">
            <Nyc />
          </Route>
          <Route path="/maldives">
            <Maldives />
          </Route>
          <Route path="/Paris">
            <Paris />
          </Route>
          <Route path="/machupicchu">
            <MacPac />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    
        </div>
   
    </Router>
  );
}

function Home() {
  return(
    <div>

    </div>
  )
}

function Nyc() {
  return( 
    <div className="nyc">
 
  <Box 
   information = {1200}
  />
    <div className="playlist">
      <Playlist src= "https://open.spotify.com/embed/playlist/6DaUuentUFgY1MInjAe3Ek?theme=0"/>
  </div>
</div>
  )
}

function Maldives() {
  return( 
    <div className="mald">
     
  <Box 
   information = {1200}
  />
    <div className="playlist">
      <Playlist src= "https://open.spotify.com/embed/playlist/3macnRLsUM0CugS4D4ApSg?theme=0"/>
  </div>
</div>
  )
}

function Paris() {
  return( 
    <div className="paris">
 
  <Box 
   information = {1200}
  />
    <div className="playlist">
      <Playlist src= "https://open.spotify.com/embed/playlist/6u77PCVs2RNx1FKb6XXkSE?theme=0"/>
  </div>
</div>
  )
}

function MacPac() {
  return( 
    <div className="macpac">
     
  <Box 
   information = {1200}
  />
    <div className="playlist">
      <Playlist src= "https://open.spotify.com/embed/playlist/7blHnxFW3CLP8OOzaVJ2R1?theme=0"/>
  </div>
</div>
  )
}







