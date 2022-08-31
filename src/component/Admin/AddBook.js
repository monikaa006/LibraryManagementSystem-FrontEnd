import React, { useState } from "react";
import axios from 'axios'
import { NavLink, useNavigate } from "react-router-dom";


const AddBook = () => {
    let navigate = useNavigate();

    const [products, setProducts] = useState({
        id: "",
        title: "",
        url: "",
        price: "",
        description: ""
    });

    const { id, title, url,  description } = products;
    const onInputChange = e => {
        setProducts({ ...products, [e.target.name]: e.target.value });
    };

    // Add New Table Row for using post method
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3009/products", products);
        navigate("/");
    };

    return (

        <>
            <div style={{ backgroundImage: `url("https://wallpaperaccess.com/full/253332.jpg")`, backgroundRepeat: "no-repeat", width: "100%", height: "900px" }} className='container' >

                <br /><br />
                <NavLink style={{ float: "left" }} className='btn btn-primary ms-2 rounded-pill' exact to={'/Dashbroad'}>back to home</NavLink>
                <div className="container">
                    <div className="w-50 mx-auto shadow p-5">
                        <h2 style={{color:"white"}} className="text-center mb-4"><u>Add new Book</u></h2>
                        <form onKeyDown={async (e) => {
                            if (e.key === "Enter") await onSubmit(e)
                        }} onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter book id"
                                    name="id"
                                    value={id}
                                    onChange={e => onInputChange(e)} required
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter book title"
                                    name="title"
                                    value={title}
                                    onChange={e => onInputChange(e)} required
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input
                                    type="url"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter book image Url"
                                    name="url"
                                    value={url}
                                    onChange={e => onInputChange(e)} required
                                />
                            </div>
                           
                            <br />
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Enter book description"
                                    name="description"
                                    value={description}
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