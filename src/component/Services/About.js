import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaBookReader, FaPhone } from 'react-icons/fa'
import { Footer } from './Footer'
import NavbarM from './NavbarM'

function About() {
    return (
        <>
             <div>                 
                    <Row>                  
                         <Col> 
                          <img src="../../images/librarylogo.jpg" alt="Library Management System - Logo" style={{ float: "left", marginTop: "7px",height:"50px",width:"400px" }} />
                              </Col>
                              <Col style={{marginTop:"20px" }}>
                                <FaPhone />
                            <span className='ms-1' >Call us Now:</span>+91-9350679141
                             </Col>                 
                    </Row>
                </div>       
            <NavbarM/>
            <div className='container'>
                <br />
                <h2 style={{ textAlign: "center", color: "darkred" }}>  <FaBookReader /><u>About Us</u></h2>
                <br />
                <div className='container'>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiVCEUFiLpc3XRPYpjFbRwStgHYDiD-vQMA&usqp=CAU" alt="responsive webite" class="img-fluid" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6" >
                                <h2 style={{ color: "goldenrod" }}>Book </h2>
                                <p style={{ fontSize: "17px" }}>
                                    version of bootstrap has removed JQuery dependency not fully work on vanilla javascript.a set of written sheets of skin or paper or tablets of wood or ivory. b : a set of written, printed, or blank sheets bound together between a front and back cover an address book.</p>
                                <p>  c : a long written or printed literary composition reading a good book reference books hardcover and paperback books..
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5" >
                                <h2 style={{ color: "goldenrod" }}>Library</h2>
                                <p style={{ fontSize: "17px" }}> library, traditionally, collection of books used for reading or study, or the building or room in which such a collection is kept.<p>The word derives from the Latin liber, “book,” whereas a Latinized Greek word, bibliotheca, is the origin of the word for library in German, Russian, and the Romance languages.</p>
                                </p>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiVCEUFiLpc3XRPYpjFbRwStgHYDiD-vQMA&usqp=CAU" alt="responsive webite" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <h3 style={{ textAlign: "center", color: "darkred" }}>THANKS FOR VISITE THIS WEBSITE</h3>
                    <br />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
