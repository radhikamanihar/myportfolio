import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import contacters from "../apis/contacters.js"

import {Form,Button, Container, Card,Row,Col} from 'react-bootstrap'
import "../styles/Contact.css"
import {AiFillAccountBook, AiFillAlert, AiFillAlipayCircle, AiFillAliwangwang, AiFillAmazonSquare, AiOutlineSend} from "react-icons/ai"
const Contact = () => {
    const [contacter, setContacter] = useState({
        email: "", message: "", firstName: "",lastName:"",subject:""
   })

   const conatcterChange = (e) => {
    e.preventDefault();
    setContacter({
        ...contacter, [e.target.name]: e.target.value
    })
}
    const handleSubmit = event => {
        event.preventDefault();
        
        contacters.post('/contacters', {
            email: contacter.email,
            meaasge:contacter.message,
            subject:contacter.subject,
            firstName:contacter.firstName,
            lastName:contacter.lastName
        })
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        // <div className="contact">
        //     <div className={Container}>
        //         To <strong>contact</strong>
        //         <p>Please fill out the details</p>
        //     </div>
        //     <Form>
        //     <Form.Group className="mb-3">
        //         <Form.Label className="label">Name</Form.Label>
        //         <Form.Control className="input" type="text" placeholder="Enter name" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" >
        //         <Form.Label className="label">Subject</Form.Label>
        //         <Form.Control type="text" className="input" placeholder="Subject" />
        //     </Form.Group>

        //     <Form.Group className="mb-3">
        //         <Form.Label className="label">Email</Form.Label>
        //         <Form.Control type="email"  className="input" placeholder="Email" />   
        //     </Form.Group>

        //     <Form.Group className="mb-3">
        //         <Form.Label className="label">Message</Form.Label>
        //         <Form.Control as="textarea" type="text" placeholder="Message" className="input" />
        //     </Form.Group>
        //     <Button onSubmit={handleSubmit} variant="primary" type="submit">
        //         Send Message  
        //     </Button>
        //     </Form>
        // </div>
        <div className="contact">
            <Card style={{marginLeft:"20px",background:"none",border:"none"}}>
            
            <div className="container d-flex-space-between" style={{textAlign:"center"}}>
                <h2 style={{fontSize:"40px"}}><span style={{color:"orange"}}>Contact</span> me</h2>
            </div>
            {/* <Row className="justify-content-md-center py-2">
                <Col xs lg="2" style={{borderColor:"black"}}>
                <AiFillAccountBook/>
                </Col>
                <Col xs lg="2">
                    <AiFillAlert/>
                </Col>
                <Col xs lg="2">
                    <AiFillAlipayCircle/>
                </Col>
                <Col xs lg="2">
                    <AiFillAliwangwang/>
                </Col>
            </Row> */}
            <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-map-signs"></span>
          		</div>
          		{/* <h4 className="mb-4">Address</h4> */}
                  <i class="bi bi-geo-alt-fill"></i>
	            <p>Mahamandir, Jodhpur, Rajasthan</p>
	          </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-phone2"></span>
          		</div>
          		{/* <h4 className="mb-4">Contact Number</h4> */}
                  <i class="bi bi-telephone-fill"></i>
	            <p><a href="tel://1234567920">+91-8107662015</a></p>
	          </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-paper-plane"></span>
          		</div>
          		{/* <h4 className="mb-4">Email Address</h4> */}
                  <i class="bi bi-envelope-fill"></i>
	            <p><a href="mailto:info@yoursite.com">radhikamanihar2001</a></p>
	          </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-globe"></span>
          		</div>
          		{/* <h4 className="mb-4">Website</h4> */}
                  <i class="bi bi-globe"></i>
	            <p><a href="#">MyPortfolio.com</a></p>
	          </div>
          </div>
        </div>
        
            <form style={{padding:"20px"}} onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                <label className="" for="fname">First name</label>
                <input type="text" className="form-control" id="fname" value={contacter.firstName} onChange={conatcterChange}></input>
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                <label className="" for="lname">Last name</label>
                <input type="text" className="form-control" id="lname"  value={contacter.lastName} onChange={conatcterChange}></input>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                <label className="" for="email">Email address</label>
                <input type="email" className="form-control" id="email" value={contacter.email} onChange={conatcterChange}></input>
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                <label className="" for="subject">Subject</label>
                <input type="text" className="form-control" id="subject"  value={contacter.subject} onChange={conatcterChange}></input>
                </div>
                </div>
                </div>
                <div className="form-group">
                <label className="" for="message">Message</label>
                <textarea name="" className="form-control" id="message" cols="30" rows="5" value={contacter.message} onChange={conatcterChange}></textarea>
                </div>
                <button  type="submit" style={{background:"orange", borderColor:"orange",borderRadius:"10px"}} className="btn  btn-primary"><AiOutlineSend/>Send Message</button>
            </form>
            </Card>
        </div>
           
    )
}

export default Contact
