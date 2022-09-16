
import React from "react"
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export const Footer = () =>
 <footer  className="bg-dark text-center text-white page-footer font-small blue pt-4">
    <div  className="container-fluid text-center text-md-left ">
        <section style={{float:"left"}} className="mb-8">
           <NavLink className="btn btn-primary" to={'#!'}><FaFacebook/></NavLink>
           <NavLink className="btn btn-primary ms-2" to={'#!'}><FaInstagram/></NavLink>
           <NavLink className="btn btn-primary ms-2" to={'#!'}><FaGithub/></NavLink>
           <NavLink className="btn btn-primary ms-2" to={'#!'}><FaTwitter/></NavLink>
           <NavLink  className="btn btn-primary ms-2" to={'#!'}><FaGoogle/></NavLink>
        </section>
        
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 ">
                <h5 className="text-uppercase">Library</h5>
                <p>“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Books</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Books</a></li>
                    <li><a href="#!">Feature</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Log in</a></li>
                    <li><a href="#!">Sign In</a></li>
                    <li><a href="#!">Book</a></li>
                    <li><a href="#!">Home</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
  <br/>
</footer>
