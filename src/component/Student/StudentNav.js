import React from 'react'
import { FaBars, FaPhone } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

import StudentNav from './StuNavbar';




function Student() {
    let navigate = useNavigate();
  const Menu = () => {

    navigate('/StudentHome');
  }
  const IssueBook = () => {

  navigate('/IssueBook');
   }
    return (
        <>
        <div>
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
            <StudentNav/>
           <br/>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">DashBoard</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="/StudentHome" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="/IssueBook" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Issue Books</span></a>
                                </li>
                                <li>
                                    <a href="/ViewBook" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">view Books</span></a>
                                </li>
                                <li>
                                    <a href="/ReturnBook" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Return Book</span></a>
                                </li>



                            </ul>
                            <hr />


                        </div>

                    </div>
                    <div className="col py-3">
                    <FaBars style={{float:"left"}} onClick={Menu}></FaBars>

                        <h2>welcome to Library Management System</h2>
                        <p className="lead">
                            “Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”<br />
                            <h6 style={{ color: "darkblue" }}>― John Green, The Fault in Our Stars</h6>

                        </p>
                        <div className='row '>
                            <div class="card ms-2" style={{ width: " 18rem" }}>
                                
                                <img  src="https://www.dailyexcelsior.com/wp-content/uploads/2014/08/PGCC.jpg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> C book</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <button onClick={IssueBook} class="btn btn-success  rounded-pill">Issue</button>
                                </div>
                            </div>
                            <div class="card ms-2" style={{ width: " 18rem" }}>
                                <img src="https://kbazar.s3.amazonaws.com/__sized__/products/programmingwithjava-thumbnail-540x540-70.jpeg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Java Book</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <button onClick={IssueBook} class="btn btn-success  rounded-pill">Issue</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Student
