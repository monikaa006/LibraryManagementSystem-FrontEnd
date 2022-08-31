import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer'




function Sidebar() {
    
    
    return (
        <>


            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">DashBoard</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="/" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="/AddProduct" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Issued Books</span></a>
                                </li>
                                <li>
                                    <a href="/ViewProducts" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Add Book</span></a>
                                </li>
                                <li>
                                    <a href="/ViewProducts" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Remove  Book</span></a>
                                </li>
                                <li>
                                    <a href="/ViewProducts" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">View Book</span></a>
                                </li>

      <br/>
                                
                            </ul>
                            <hr />


                        </div>

                    </div>
                    <div className="col py-3">

                        <h2>welcome to Library Management System</h2>
                        <p className="lead">
                            “Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”<br/>
                            <h6 style={{color:"darkblue"}}>― John Green, The Fault in Our Stars</h6>
                             
                        </p>

                    </div>

                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Sidebar
