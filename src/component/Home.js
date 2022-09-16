import React from 'react'
import { FaPhone} from 'react-icons/fa'

import { Footer } from './Services/Footer'

import Navbar from './Services/Navbar'



function Home() {
    return (
        <div>
             <header className="header-section  ng-scope">
                <div >
                    <a style={{ float: "left" }} href="/" className="site-logo"><img src="../../images/librarylogo.jpg" alt="Library Management System - Logo" style={{ marginTop: "7px",height:"50px",width:"400px" }} /></a>
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
            <div style={{ backgroundImage: " url('https://cphlibrary.org/wp-content/themes/CPH/img/CPHL_Patterns_About.jpg')" }}>
              <main className="site-main" id="main">
                    <div >
                        <br />                  
                        <div className="row">
                            <h4 className='mb-2' style={{marginLeft:"30px"}}>Some Programming Books</h4>
                            <div className=" ms-1" style={{ width: " 18rem" }}>
                                <img src="https://www.dailyexcelsior.com/wp-content/uploads/2014/08/PGCC.jpg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </div>
                            <div className=" ms-1" style={{ width: " 18rem" }}>
                                <img src="https://kbazar.s3.amazonaws.com/__sized__/products/programmingwithjava-thumbnail-540x540-70.jpeg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </div>
                            <div className=" ms-1" style={{ width: " 18rem" }}>
                                <img src="https://hackr.io/blog/uploads/images/the-pragmatic-programmer-your-journey-to-mastery-20th-anniversary-edition-2nd-edition-2nd-edition.jpg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </div>
                            <div className=" ms-1" style={{ width: " 18rem" }}>
                                <img src="https://kbazar.s3.amazonaws.com/__sized__/products/programmingwithjava-thumbnail-540x540-70.jpeg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </div>
                        </div>
                        <br/>
                        <div className="row" style={{marginBottom:"200px"}} >
                            <h4 style={{float:"left"}}>Some Story Books</h4>
                            <div className=" ms-1" style={{ width: " 18rem" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNS_DO7QoosKjHS8oUhshggnU6QnbICIojg&usqp=CAU" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </div>
                            <div  style={{ width: " 18rem" }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zcbU1v5YUf6xfyUWQy6KqcsF2XQGgI8Uo3uB1gF8Rwaxo7Hs28G9xaWMj3GcKk-30fQ&usqp=CAU" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </div>
                            <div className=" ms-1" style={{ width: " 18rem" }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLkCNoXjBUUs1dkhPNRagwwJ6o4MBUKNAug&usqp=CAU" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </div>
                            <div className=" ms-1" style={{ width: " 18rem" }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmR8JDivKoAdfO9oHSO13liZjuR9XTVZVQpg&usqp=CAU" style={{ height: "200px" }} class="card-img-top" alt="..." />
                            </div>
                        </div>
                        <br/>  
                    </div>
                </main>              
            </div>            
          <Footer />
          </div>          
    )
}

export default Home
