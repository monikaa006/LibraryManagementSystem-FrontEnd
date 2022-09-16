import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function SignUpForm() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPassword_Confirmation] = useState("")
    const signup = (e) => {
        e.preventDefault();
        let item = { user: { name, phone, email, address, password, password_confirmation } }
        if (!name) {
            toast.warning("enter name")
        }
        else if (!password) {
            toast.warning("enter password")
        }
        else if (!email) {
            toast.warning("enter email")
        }
        else if (!phone) {
            toast.warning("enter phone")
        }
        else if (phone.length !== 10) {
            toast.warning("enter vaild phone number")
        }
        else if (!address) {
            toast.warning("enter address")
        }
        else if (password !== password_confirmation) {
            toast.warning("password does not match")
        }
        else {
            alert(" signUp succesuffly")
            localStorage.setItem("login", "true")

            navigate("/StudentHome")
            // const fetchData = async()=>{

            //        await axios.post("http://localhost:3000/api/user/signup", item)
            //       .then((res)=>{
            //           alert("signup successfully")
            //           console.log(res.data)
            //           console.log(res.data.token)
            //           localStorage.setItem("token",JSON.stringify(res.data.token))
            //          navigate("/StudentHome")


            //       }).catch((err)=>{
            //           console.log(err)
            //       })                  
            //   }
            //   fetchData();
        }
    }
    return (
        <div style={{ backgroundImage: `url("https://wallpaperaccess.com/full/253332.jpg")`, backgroundRepeat: "no-repeat", width: "100%", height: "900px" }} className='container' >
            <br />

            <div style={{ textAlign: "center" }} className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-3">
                        <div className="signup-form">
                            <form onKeyDown={async (e) => {
                                if (e.key === "Enter") await signup(e)
                            }} onSubmit={(e) => signup(e)} className=" w-100  mt-3 border p-6 bg-light shadow">
                                <br />
                                <h4 className="mb-3 text-secondary">Create Your Account</h4>
                                <div className="row">
                                    <div className="mb-3 col-md-5">
                                        <label> Name<span className="text-danger">*</span></label>
                                        <input type="text" name="name" value={name} className="form-control ms-4" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                                    </div>

                                    <div className="mb-3 col-md-5">
                                        <label>Email<span className="text-danger">*</span></label>
                                        <input type="email" name="email" value={email} className="form-control ms-4 " onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                                    </div>
                                    <div className="mb-3 col-md-5">
                                        <label> Phone<span className="text-danger">*</span></label>
                                        <input type="number" name="phone" value={phone} className="form-control ms-4" placeholder="Enter Name" onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="mb-3 col-md-5">
                                        <label>address<span className="text-danger">*</span></label>
                                        <input type="text" name="address" value={address} className="form-control ms-4 " onChange={(e) => setAddress(e.target.value)} placeholder="Enter Email" />
                                    </div>

                                    <div className="mb-3 col-md-5">
                                        <label>Password<span className="text-danger">*</span></label>
                                        <input type="password" name="password" value={password} className="form-control ms-4" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                                    </div>
                                    <div className="mb-3 col-md-5">
                                        <label>ConfirmPassword<span className="text-danger">*</span></label>
                                        <input type="password" name="password_confirmation" value={password_confirmation} className="form-control ms-4" onChange={(e) => setPassword_Confirmation(e.target.value)} placeholder="Confirm Password" />
                                    </div>

                                    <div >
                                        <button className="btn btn-primary rounded-pill" onClick={(e) => signup(e)}>
                                            <ToastContainer />Signup</button>
                                    </div>
                                </div>

                                <br />
                            </form>
                        </div >
                    </div>
                </div>

            </div>
            <br />


        </div>
    )
}

