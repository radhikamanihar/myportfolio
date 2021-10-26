import React from 'react'
import { Card,Button } from 'react-bootstrap'
import "../styles/ProjectCard.css"
const ProjectCard = (props) => {
    return (
        <div>
            <Card style={{ width: '20rem',margin:"20px" ,borderRadius:"10px"}} className="project-card">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.desc}
                        <a href={props.text}>See
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard
