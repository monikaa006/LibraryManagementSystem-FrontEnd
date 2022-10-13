import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaBookOpen, FaSearch} from "react-icons/fa";
import LoadSpinner from './LoadSpinner';

export default function Book() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  

  const token = JSON.parse(localStorage.getItem('token'));
  const loaduser = async () => { 
    
    await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setBooks(res.data)
    })

  };

  useEffect(() => {
    loaduser();
  }, [token])

  const searchusers = async (e) => {
    e.preventDefault();
    return await axios.get(`https://jsonplaceholder.typicode.com/users?q=${search}`)
      .then(response => {
        setBooks(response.data);
        setSearch("");
      })
      .catch((err) => console.log("error", err));
  }
  function onReset() {
    loaduser();
  }
  const handleKeyDown = async (e) => {

    if (e.key === "Enter") await searchusers(e)

  }


  return (
    <div>
      <div className='container'>
        <br/>
        <br/>
        <h1 className='container ms-2' style={{ textAlign: "center", color: "black" }} > <FaBookOpen />  <u>Books Information</u></h1>
        <br/>
        <div style={{ display: "inline", }} className="comtainer ">
          <div style={{ display: "inline", marginLeft: "60%" }}>       
            <input  onKeyDown={handleKeyDown} type="text" id='form1' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search book  by name" ></input>
            <button className='btn btn-secondary'><FaSearch onClick={(e) => searchusers(e)} className='bi bi-search' /></button>
           
            <button type="button" onClick={() => onReset()} className="btn btn-danger btn-sm ms-2">Reset</button>
          </div>
        </div>
        <br/><br/>
        <div className='table-responsive-lg '>
          <table className="table border shadow  table-bordered  border-primary">
            <thead className="table-light table-bordered  border-primary ">
              <tr>
                <th scope='col' >S.No</th>
                <th scope='col' >Name
                </th>
                <th scope='col'  >author
                </th>
                <th scope='col'>edition
                </th>
                <th scope='col'>quantity
                </th>
              </tr>
            </thead>
            <tbody>            
              {
                books && books.length > 0 ?
                  books.slice(0, 5).map((book, index) =>(
                    <tr key={book.id}>
                      <td>{index + 1}</td>
                      <td > {book.name}</td>
                      <td > {book.username}</td>
                      <td > {book.address.zipcode}</td>
                      <td >{book.id}</td>
                    </tr>
                  ))
                  :<LoadSpinner/>
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
