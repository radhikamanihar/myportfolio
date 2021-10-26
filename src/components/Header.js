import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import img from "../styles/img.svg"
import profile from "../styles/profile.jpg"
import themeicon from "../styles/themeicon.svg"

import {Link} from 'react-router-dom'
import "../styles/Header.css"
import Button from '@restart/ui/esm/Button';
import { useHistory } from 'react-router';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillSwitcher } from 'react-icons/ai';
import { ButtonGroup } from 'react-bootstrap';
const Header = () => {
  const history = useHistory();

    const handleClick =(e) =>{
        e.preventDefault()
        console.log("you clicked")
        let path="https://drive.google.com/file/d/1ACgLImPiPQLw0xrU8yx1sqXUThpLsLO3/view?usp=sharing"

    }
    return (
        
    <div className="i">
      <div className="profile-main">
        <img src={profile} className="profile"></img>
        
      </div>

      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey there, I'm</h2>
          <h1 className="i-name">Radhika Manihar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Painter</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">C/C++ Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            <br/>
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <div>
          {/* <Button style={{border:"none", borderRadius:"4px" ,backgroundColor:"rgba(0, 0, 0, 0.733)", color:"#59b256" ,padding:"10px"}} onClick={handleClick}>Hire Me</Button> */}
          <Button style={{border:"none", borderRadius:"4px" ,backgroundColor:"rgba(0, 0, 0, 0.733)", color:"#59b256" ,padding:"10px",margin:"10px"}} onClick={()=>{
            window.location="https://drive.google.com/file/d/1ACgLImPiPQLw0xrU8yx1sqXUThpLsLO3/view?usp=sharing"
          }}>View Resume</Button>

      </div>
        </div>
        {/* <img src={img}></img> */}
      </div>
      {/* <div className="i-right">
        <div className="i-bg"></div>
      </div> */}
      
      
    </div>
    )
}

export default Header
