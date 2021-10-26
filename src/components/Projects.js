import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import project from "../styles/project.svg"
import "../styles/Projects.css"
import { Card ,Button} from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import react from "../styles/react.png"
import images from "../styles/images.jpeg"
import line from "../styles/line.jpeg"
import bank from "../styles/bank.jpeg"

const Projects = () => {
    const [state, setstate] = useState(false)
    return (
        <div>
            <div className="project">
            <h2 style={{margin:"50px"}}><strong>Projects</strong></h2>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <ProjectCard img={react} title="Blog app using react" text="https://github.com/radhikamanihar/blogapp" desc="I have created a blog app using React js, CSS, HTML, created an api using json server and a user can create a blog by adding the required field"/>
                <ProjectCard img={images} title="Face Recognition" text="https://github.com/radhikamanihar/face_recognition" desc="Created a face recognition project using transfer learning and fine tuning woth a live webcam."/>
                <ProjectCard img={line} title="Line Follower Robot" desc="Worked on a line follower robot using PID algorithm using Arduino and IR sensors."/>
                <ProjectCard img={bank} title="Basic Banking System" text="https://github.com/radhikamanihar/spark_banking" desc="Designed a baking website using HTML, CSS ,JS, PHP and used Apache web server for backend adn MySQL for Database."/>
                {/* <ProjectCard/> */}
                </div>
            </div>
        </div>
    )
}

export default Projects
