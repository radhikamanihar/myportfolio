import React from 'react'
import { OverlayTrigger,Tooltip } from 'react-bootstrap'
import { AiFillGithub,AiFillLinkedin,AiFillMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import themeicon from "../styles/themeicon.svg"

const RightNav = () => {
    // const [theme,setTheme] =useState('light')
    // const toggleTheme = () => {
    //     if (theme === 'light') {
    //       setTheme('dark');
    //     } else {
    //       setTheme('light');
    //     }
    //   }
      
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Alter Theme
        </Tooltip>
        );
    return (
        <div>
            <div className="social">
            
                <OverlayTrigger placement="left"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}>
                    <img src={themeicon} alt="theme" id="themeicon" ></img>
                </OverlayTrigger>
                <Link to={{pathname:"https://www.linkedin.com/in/radhika-manihar-77133119a/"}} target="_blank"><AiFillLinkedin size={40}  className="icon"/></Link>
                <Link to={{pathname:"https://github.com/radhikamanihar"}} target="_blank"><AiFillGithub size={40} className="icon"/></Link>
                <Link to="#"><AiFillMail size={40} className="icon"/></Link>
            </div>    
            
        </div>
    )
}

export default RightNav
