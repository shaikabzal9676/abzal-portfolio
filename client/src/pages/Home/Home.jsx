import React from 'react'
import './home.css'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Typewriter from 'typewriter-effect'
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";
import { useTheme } from '../../context/ThemeContext';

import resume from "../../assets/docs/Abzal MERN CV.pdf"


const Home = () => {
  const[theme,setTheme]=useTheme();

 const toggleTheme=()=>{
  setTheme((prevState)=>(prevState==='light'?'dark':'light'))
 }
  return (
    <>
    <div id ='home'className="container-fluid home-container">
      <div className="theme-btn" onClick={toggleTheme}>
        {theme==='light'?(<BsFillSunFill size={30}/>):(<BsFillMoonStarsFill size={30}/>)}
      
      </div>
      <div className="container home-content">
        <Bounce>

        
        <h3> Hello , My name is <span className='yourName'>Shaik Abzal</span></h3>
        <div className="detail">
        <span style={{fontSize:'27px'}}className='im'>I'm a</span>
        <h4 className='typing'>
          <Typewriter
          options={{
            strings:["FullStack Developer!","MERN Stack Developer!","Java Developer!"],
            autoStart:true,
            loop:true
          }}
          
          />
        </h4>
        </div>
        </Bounce>
        <div className="home-buttons">
          <Fade left>
            <a  className='btn btn-hire' href="https://api.whatsapp.com/send?phone=9701617132" rel='noreferrer' target='_blank'>Hire Me</a>
          </Fade>

          <Fade right>

          <a className='btn btn-cv' href={resume} download="AbzalCV.pdf">My Resume</a>
          </Fade>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home