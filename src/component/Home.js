import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPhone} from 'react-icons/fa'

import { Footer } from './Services/Footer'
import NavbarM from './Services/NavbarM'






function Home() {
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
               <div style={{ backgroundImage: " url('https://cphlibrary.org/wp-content/themes/CPH/img/CPHL_Patterns_About.jpg')" }}>             
                    <Container >
                        <br />                  
                        <Row>
                            <h4 className='mb-2' style={{marginLeft:"30px"}}>Some Programming Books</h4>
                            <Col>
                                <img src="https://www.dailyexcelsior.com/wp-content/uploads/2014/08/PGCC.jpg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="https://kbazar.s3.amazonaws.com/__sized__/products/programmingwithjava-thumbnail-540x540-70.jpeg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="https://hackr.io/blog/uploads/images/the-pragmatic-programmer-your-journey-to-mastery-20th-anniversary-edition-2nd-edition-2nd-edition.jpg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="https://kbazar.s3.amazonaws.com/__sized__/products/programmingwithjava-thumbnail-540x540-70.jpeg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <h4 style={{float:"left"}}>Some Story Books</h4>
                            <Col>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNS_DO7QoosKjHS8oUhshggnU6QnbICIojg&usqp=CAU" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zcbU1v5YUf6xfyUWQy6KqcsF2XQGgI8Uo3uB1gF8Rwaxo7Hs28G9xaWMj3GcKk-30fQ&usqp=CAU" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLkCNoXjBUUs1dkhPNRagwwJ6o4MBUKNAug&usqp=CAU" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmR8JDivKoAdfO9oHSO13liZjuR9XTVZVQpg&usqp=CAU" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </Col>
                        </Row>
                        <br/>  
                    </Container>
                        
            </div>            
          <Footer />
        
          </>        
    )
}

export default Home
