import React from 'react'
import "../styles/About.css"



const About = () => {
  const Progress = ({done,skill}) => {
    const [style, setStyle] = React.useState({});
    
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }
      
      setStyle(newStyle);
    }, 200);
    
    return (
      <div className="progress">
        <div className="progress-done" style={style}>
          {skill} &nbsp;{done}%
        </div>
      </div>
    )
  }
    return (
        <div className="a">
      {/* <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={img}
            alt=""
            className="a-img"
          />
        </div>
      </div> */}
      <div className="a-right">
        <h2 className="a-title">About Me</h2>
        <p className="a-sub">
          Hi!!
          <br/>
          I'm Radhika Manihar, an Electronics and Computer Engineering Undergraduate studying at
          <a href="https://mbm.ac.in/" style={{fontWeight:"700"}} target="_blank" rel="noopener noreferrer"> &nbsp;M.B.M Engineering College,Jodhpur.</a>
          I am a creative web developer and machine learning enthusiast and worked in these field in my engineering life. My few tech stacks that I enjoy working in is Python, React.js, 
          Computer Vision and solving DSA problems.
        </p>
        <h5><strong>Current Updates:</strong></h5>
        <ul>
          <li>Worked as Frontend Developer intern at <a href="https://createbytes.com"><strong>CreateBytes</strong></a> on a live project IPCMS.</li>
          <li>Worked on Face Recognition Project.</li>
          <li>Worked in the field of Machine Learning with Devops(MLOPS).</li>
          <li>Learning Full Stack Development</li>
          <li>Active participation in live coding contests of <a href="https://www.codechef.com/users/radhikamanihar" target="_blank" rel="noopener noreferrer">Codechef</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/radhikamanihar21">HackerRank.</a></li>
          <li>Fun Fact: Foodie,Painter</li>
        </ul>
        <h5><strong>What excites me to code and Learn more?</strong></h5>
        <p className="a-sub">
          I think all high level concepts can be boiled down into smaller instructions which can be easily implemented and programmed with optimisation using the computer program.
          I enjoy creating programs and visulize it on pen and paper and jot down in the form of code.
        </p>
        
        <div>
          <h5><strong>Skill Sets:</strong></h5>
          <Progress done="85" skill="HTML"/>
          <Progress done="85" skill="CSS" />
          <Progress done="75" skill="JavaScript"/>
          <Progress done="80" skill="DSA"/>
          <Progress done="70" skill="Python"/>
          <Progress done="70" skill="Ml/AI"/>

        </div>
      </div>
    </div>
    )
}

export default About
