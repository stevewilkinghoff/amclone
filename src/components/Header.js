import React from 'react'
import './Header.css';
import '../App.css';

import { NavLink, Link } from 'react-router-dom';

//function Header({ title }) {
//    return (
//        <div className="App-header">
//            <h1>{title}</h1>
//      </div>
//    )
//}

//export default Header


const Header = () => (
    <>
    <header className="App-header" style={{display: "flex", marginRight:"20px"}}>
    <div>
    <h3>Found Money Toolkit!</h3>
    </div>
    <div style={{display:"flex", marginLeft: "20px"}}>
    <NavLink to="/" className="App-header" exact={true}>Home</NavLink>
    <NavLink to="fmoh" className="App-header" >FMOH</NavLink>
    <NavLink to="rmentry" className="App-header" > Enter Roadmap Items</NavLink>
    <NavLink to="rmroadmap" className="App-header" >FM Roadmap</NavLink>
    <NavLink to="custentry" className="App-header" >Enter CPM Data</NavLink>
    <NavLink to="fmitementry" className="App-header" > FM OH Entry</NavLink>
    </div>
    
    </header>
    </>
  )

export default Header;