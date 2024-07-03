import React from 'react';
import { Canvas } from '@react-three/fiber';
import '../components/Navbar.css';  
import Planet from './planet.jsx'; 

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='header'>
            <h1>Ex</h1>
            <div className='planet'>
              <Canvas> 
                <ambientLight/>
                <Planet size={[2.3,16,16]} Color={"red"} speed={[0.2]}/>
              </Canvas>
            </div>
            <h1>planet</h1>
        </div>  
        <div className='navbarComp'> 
          <a href="home">Home</a>   
          <a href="news">News</a>  
          <a href="Login">Login</a> 
          <a href="about">About</a>
        </div> 
    </div>
)
} 