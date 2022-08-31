import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,  useParams  } from 'react-router-dom';
import {  FaBookReader } from "react-icons/fa";


export default function View() {
    const initialvalues = {
        name:" ",
        author: " ",
        edition: " ",
        quantity: " ",
        
    };

    const [book, setBook] = useState(initialvalues);
    
    let { id } = useParams();
    const loaduser = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users${id}`);
        
        setBook(result.data);
        
    };
    useEffect(() => {
        loaduser();
    })


    return (
        <div style={{ backgroundImage: " url('https://cphlibrary.org/wp-content/themes/CPH/img/CPHL_Patterns_About.jpg')" }} >
            <br></br><br></br>
            <Link  style={{float:"left",marginLeft:"30px"}} className='btn btn-primary'  to={"/"}>back to home</Link><br></br>
            <br></br>
           
            <div className="w-50 mx-auto shadow p-5">
            <h2 style={{color:"darkblue"}}> <FaBookReader></FaBookReader><u>Book Id {id}</u></h2>
  <br/>
             <ul class="list-group list-group-flush">


                <li className="list-group-item mb-1">name:-{book.name}</li>
                <li className="list-group-item mb-1 ">Author:-{book.author}</li>
                <li className="list-group-item mb-1">Edition:-{book.edition}</li>
                <li className="list-group-item mb-1">Quantity:-{book.quantity}</li>
             
             </ul>

            </div>
        </div>
    )
}
