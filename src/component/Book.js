import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { FaBookOpen, FaSearch } from "react-icons/fa";


export default function Book() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);


  const token = JSON.parse(localStorage.getItem('token'));

  const loaduser = async () => {
    if (token) {
      //console.log(token)

      await axios.get("https://3c1c-122-168-72-226.in.ngrok.io/book", {
        headers: { "Authorization": `Bearer ${token}`, "token": token, "Content-Type": "application/json" }
      })
        .then((res) => {
          console.log("==========token===============",token)
          console.log(res);
          setBooks(res.json)
        })
        .catch((err) => {
          console.log(err)
          console.log(err.message)
        });
       
    }

  };
  loaduser();

  const searchusers = async (e) => {
    e.preventDefault();
    return await axios.get(`https://3c1c-122-168-72-226.in.ngrok.io/book?q=${search}`)
      .then(response => {

        setBooks(response.json);
        setSearch("");

      })
      .catch((err) => console.log("error", err));
  }

  function onreset() {
    loaduser();
  }


  return (
    <div style={{ backgroundImage: " url('https://cphlibrary.org/wp-content/themes/CPH/img/CPHL_Patterns_About.jpg')" }} >
      <div className='container'>
        <br />

        <br />
        <h1 className='container ms-2' style={{ textAlign: "center", color: "black" }} > <FaBookOpen />  <u>Books Information</u></h1>
        <br />
        <div style={{ display: "inline", }} className="comtainer ">


          <div style={{ display: "inline", marginLeft: "60%" }}>
            <input onKeyDown={async (e) => {
              if (e.key === "Enter") await searchusers(e)
            }} type="text" id='form1' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search by name" ></input>
            <button className='bt btn-secondary'>  <FaSearch onClick={(e) => searchusers(e)} className='bi bi-search' /></button>
            <button type="button" onClick={() => onreset()} className="btn btn-danger btn-sm ms-2">Reset</button>


          </div>

        </div>


        <br /><br />
        <div className='table-responsive-lg '>
          <table className="table border shadow  table-bordered  border-primary">
            <thead className="table-light table-bordered  border-primary ">
              <tr >
                <th scope='col' >BookId</th>
                <th scope='col' >Name

                </th>

                <th scope='col'  >author

                </th>
                <th scope='col'>edition

                </th>
                <th scope='col'>quantity

                </th>
                <th scope='col'> Actions   </th>

              </tr>
            </thead>
            <tbody>
              {
                books && books.length > 0 ?
                  books.map((book) => (

                    <tr key={book.id}>

                      <td>{book.id}</td>
                      <td > {book.name}</td>
                      <td > {book.author}</td>
                      <td > {book.edition}</td>
                      <td >{book.quantity}</td>

                      <td>

                        <Link type="submit" className="btn btn-warning ms-1" to={`/View/${books.id}`}>
                          view</Link>

                      </td>
                    </tr>

                  ))
                  : " Data Not Found"
              }


            </tbody>
          </table>
          <br></br>





          <br></br>

        </div>
      </div>


    </div>
  )
}
