import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate=useNavigate();

 const logIn=()=>{
   navigate("/LoginForm")
  
 }
 const SignUp=()=>{
    
    navigate("/SignUpForm")
  
   
  }
  const removeUser = localStorage.getItem("token");
   const logOut= ()=>{

  if (removeUser) {
    localStorage.removeItem("token");
    alert("logging Out Successfully");
    navigate("/")
   
  } else {
   alert("sign Up First")
  }
}
 return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                            <li className="navbar-brand" >
                                <img style={{ width: "100px" }} src='https://demo.fieldthemes.com/bookshop/intro/images/logo.png' alt="Responsive user"></img>
                            </li>
                      
                        <li className="nav-item active ms-2">
                            <NavLink className="nav-link" exact to="/">Home </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/About">about</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Book">Books</NavLink>
                        </li>
                     
                        <li className="nav-item">
                        <button className="btn btn-default" style={{ color: "white", marginLeft: "740px" }} exact  onClick={SignUp}>Signup</button>
                    </li>
                      
                        {removeUser ? 
                        <li className="nav-item">
                            <button className="btn btn-default" onClick={logOut}  style={{ color: "white" }} >logOut</button>
                        </li> : 
                       
                        <li className="nav-item">
                            <button className="btn btn-default" style={{ color: "white" }} onClick={logIn}>login</button>
                        </li> 
                        }
                        
                     
                   
                      
                    </ul>

                </div>

            </nav>

        </>
    )
}
