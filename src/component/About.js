import React from 'react'

import { FaBookReader, FaPhone } from 'react-icons/fa'
import { Footer } from './Footer'
import Navbar from './Navbar'

function About() {
    return (
        <>
          
            <header className="header-section  ng-scope">
                <div  >

                    <a style={{ float: "left" }} href="/" className="site-logo"><img src="https://www.elibrarysoftware.com/img/logo.png" alt="Library Management System - Logo" style={{ marginTop: "7px" }} /></a>

                    <div className="header-info">
                        <div className="hf-item ">
                        <a style={{ marginLeft: "35%" }} href="/" className="site-logo">
                            <img src="https://us.123rf.com/450wm/putracetol/putracetol1805/putracetol180500840/101178983-pixel-book-logo-icon-design.jpg?ver=6" style={{width:"80px"}}  alt="GEM Logo" /></a>
                            <FaPhone className='ms-2' />
                            <span className='ms-1' >Call us Now:</span>+91-9350679141
                        </div>


                    </div>
                </div>
            </header>
            <Navbar />

            <div className='container'>
                <br />
                <h2 style={{ textAlign: "center", color: "darkred" }}>  <FaBookReader /><u>About Us</u></h2>
                <br />
                <div className='container'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-5" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiVCEUFiLpc3XRPYpjFbRwStgHYDiD-vQMA&usqp=CAU" alt="responsive webite" class="img-fluid" />
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6" >
                                <h2 style={{color:"goldenrod"}}>Book </h2>
                                <p style={{ fontSize: "17px" }}>
                                    version of bootstrap has removed JQuery dependency not fully work on vanilla javascript.a set of written sheets of skin or paper or tablets of wood or ivory. b : a set of written, printed, or blank sheets bound together between a front and back cover an address book.</p>
                                <p>  c : a long written or printed literary composition reading a good book reference books hardcover and paperback books..
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-5" >
                            <h2 style={{color:"goldenrod"}}>Library</h2>
                                <p style={{ fontSize: "17px" }}> library, traditionally, collection of books used for reading or study, or the building or room in which such a collection is kept.<p>The word derives from the Latin liber, “book,” whereas a Latinized Greek word, bibliotheca, is the origin of the word for library in German, Russian, and the Romance languages.</p> 
                                </p>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiVCEUFiLpc3XRPYpjFbRwStgHYDiD-vQMA&usqp=CAU" alt="responsive webite" class="img-fluid" />
 
                            </div>
                        </div>
                    </div>

  <br/>
                    <h3 style={{ textAlign: "center" ,color:"darkred"}}>THANKS FOR VISITE THIS WEBSITE</h3>
                    <br/>
                    </div>
    
                </div>
                <Footer />
            </>
            )
}

            export default About
