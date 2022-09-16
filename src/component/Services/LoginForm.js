import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";




const Login = () => {
   
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

         const addData = (e) => {
             e.preventDefault();
            
             let item={user:{email,password}};
             if(!email){
                toast.warning("enter email")
             }
             else if(!password){
                toast.warning("enter password")
             }
             else{
               
               
                localStorage.setItem("login","true")
                if(email==="admin@gmail.com"&&password==="admin@123")
                {
                    alert("admin login succesufully")
                    navigate("/Dashboard")
                }
              else{
                alert("user login succesufully")
                navigate("/StudentHome")
               }
               /*axios.post("http://localhost:3000/api/user/signin", item)
                .then((res)=>{
                   
                    localStorage.setItem("token",JSON.stringify(res.data.token))
                    localStorage.setItem("role",JSON.stringify(res.data.user.role))
                    if(res.data.user.role==="admin"){
                        alert("admin login successfuly");
                        navigate("/Dashboard")
                    }
                    else{
                       alert("user login succesfully")
                        navigate('/StudentHome')
                    }
                     
                    localStorage.setItem("token",JSON.stringify(res.data.token))

                    
                   
                }).catch((err)=>{
                    console.log(err)
                })                 
            }
        */
             }
           
        }
     
    return (
        <>
        
            <div  style={{backgroundImage: `url("https://i.pinimg.com/originals/24/3b/78/243b785761016bb9f62e6d4dcef7bc53.jpg")`, backgroundRepeat:"no-repeat", width:"100%", height:"900px" }} >
            <br/><br/>
            
                <div style={{textAlign:'center',backgroundColor:"whitesmoke"}} className="w-50 mx-auto shadow p-2" >
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3  className='text-center col-lg-6'>Sign IN</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email'  value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"  required/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  required/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicButton">
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            <ToastContainer/>  
                            Submit
                           
                            </Button>
                          
                            <p  className='mt-3'>Don't  Have an Account <span><NavLink  to='/SignUpForm'>SignUp</NavLink></span> </p>
                            </Form.Group>
                        </Form>
                    </div>
                    
                </section>
                </div>
                <br/><br/><br/><br/><br/><br/>
            </div>
        </>
    )
}

export default Login