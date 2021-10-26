import React from 'react'
import "../styles/LeftNav.css"
import about from "../styles/about.svg"
import { Link } from 'react-router-dom'
import { AiFillAccountBook, AiFillAlert, AiFillAlipayCircle, AiFillContacts, AiFillHome } from 'react-icons/ai'

const LeftNav = () => {
    return (
        <div>
            <nav className="nav">
            <div >
                <Link className="link" to="/">
                <AiFillHome size={20} className="icon"/>
                <br/>
                    Home</Link>
                </div>
                <div >
                <Link className="link" to="/about">
                <AiFillAccountBook size={20} className="icon"/>
                <br/>
                    About Me</Link>
                </div>
                <div>
                <Link className="link" to="/projects" onClick={()=>{
                    document.title="Projects | Radhika"
                }}>
                    <AiFillAlert size={20} className="icon"/>
                <br/>   
                    Projects</Link>
                </div>
                {/* <div>
                <Link className="link" to="/certificates" onClick={()=>{
                    document.title="Certificates | Radhika"
                }}>
                    <AiFillAlipayCircle size={20} className="icon"/>
                    <br/>
                    Certificates</Link>
                </div> */}
                <div>
                    <Link className="link" to="/contact" onClick={()=>{
                        document.title="Contact |Radhika"
                    }}>
                        <AiFillContacts size={20} className="icon"/>
                        <br/>
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default LeftNav


