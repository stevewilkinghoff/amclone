import React from 'react'
import './Header.css';
import '../App.css';

import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <>
    <header className="App-header" style={{display: "flex", marginRight:"20px"}}>
    <div>
    <h3>Found Money Toolkit!</h3>
    </div>
    <div style={{display:"flex", marginLeft: "20px"}}>
    <NavLink to="/" className="App-header" exact={true}>Home</NavLink>
    <NavLink to="fmoh" className="App-header" >FMOH</NavLink>
    <NavLink to="rmmaintest" className="App-header" >FM Roadmap</NavLink>
    <NavLink to="cpmentry" className="App-header" >Enter CPM Data</NavLink>
    <NavLink to="fmohitementry" className="App-header" >FM OH Entry</NavLink>
    <NavLink to="fmoh2" className="App-header" >FMOHLive</NavLink>
    <NavLink to="rmentrylive" className="App-header" >Roadmap Entry Live</NavLink>
    <NavLink to="customerlist" className="App-header" >CPM List</NavLink>
    </div>
    
    </header>
    </>
  )

export default Header;