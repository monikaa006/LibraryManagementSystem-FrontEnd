import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";


const AddBook = () => {
    let navigate = useNavigate();

    const [book, setBook] = useState({  
        name: "",
       author:"",
      edition:"",
        quantity: ""
    });

    const { name,author,edition,quantity } = book;
    const onInputChange = e => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };
    const token = JSON.parse(localStorage.getItem('token'));
    const user_id = JSON.parse(localStorage.getItem('id'));
    console.log(user_id)
    console.log(token, "-----------------")
    // Add New Table Row for using post method
    const onSubmit = async e => {
        e.preventDefault();
        alert("successfully added a new book")
        navigate("/Dashboard")
    //     let item={book:{name,author,edition,quantity,user_id}}
    //     e.preventDefault();
    //     await axios.post("https://64bc-122-168-72-226.in.ngrok.io/book", item ,{ headers: { "Authorization":`${token}` ,
    //     "ngrok-skip-browser-warning": "*"
    //        }
    //   }).then((res)=>{
    //     console.log(res.data)
    //     navigate("/DashBroad")
    //   }).catch((err)=>{
    //     console.log(err)
    //   });
    
    };

    return (

        <>
            <div style={{ backgroundImage: `url("https://wallpaperaccess.com/full/253332.jpg")`, backgroundRepeat: "no-repeat", width: "100%", height: "900px" }} className='container' >

                <br /><br />
                <NavLink style={{ float: "left" }} className='btn btn-primary ms-2 rounded-pill' exact to={'/Dashboard'}>back to home</NavLink>
                <div className="container">
                    <div className="w-50 mx-auto shadow p-5">
                        <h2 style={{color:"white"}} className="text-center mb-4"><u>Add new Book</u></h2>
                        <form onKeyDown={async (e) => {
                            if (e.key === "Enter") await onSubmit(e)
                        }} onSubmit={(e) => onSubmit(e)}>
                            
                            <br />
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter book name"
                                    name="name"
                                    value={name}
                                    onChange={e => onInputChange(e)} required
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter book author name"
                                    name="author"
                                    value={author}
                                    onChange={e => onInputChange(e)} required
                                />
                            </div>
                           
                            <br />
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter book edition"
                                    name="edition"
                                    value={edition}
                                    onChange={e => onInputChange(e)} required
                                />
                            </div><br></br>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter book quantity"
                                    name="quantity"
                                    value={quantity}
                                    onChange={e => onInputChange(e)} required
                                />
                            </div>
                            <br />
                            <button className="btn btn-primary btn-block  rounded-pill">Add Book</button>


                        </form>


                    </div>
                    <br /><br />
                </div>
            </div>
        </>
    );
};

export default AddBook;