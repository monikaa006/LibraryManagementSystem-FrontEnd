import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



function UserIssueBook() {
    const [issuedBook, setIssuedBook] = useState("")
    const token = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();
    const IssueBooks = async () => {

        await axios.get(`https://64bc-122-168-72-226.in.ngrok.io/issuedbooks`, {
            headers: {
                "Authorization": `${token}`,
                "ngrok-skip-browser-warning": "*"
            }
        })
            .then((res) => {

                setIssuedBook(res.data.issuedbooks)
                console.log(issuedBook)
            })
            .catch((err) => {
                console.log(err)
                console.log(err.message)
            });


    }
    useEffect(() => {
        IssueBooks();
    }, [])

    const ReturnBook = async () => {
        alert(" book return  successfully")
        // let user_id={user:{id}}
        // localStorage.setItem("IssueId",id)

        // await axios.post(`https://64bc-122-168-72-226.in.ngrok.io/issuedbooks/return/${id}`,user_id, {
        //    headers: { "Authorization":`${token}` ,
        //    "ngrok-skip-browser-warning": "*"
        //       }
        //  } ).then((res)=>{
        //     console.log(res.data.fine)
        //     localStorage.setItem("Fine",res.data.fine)
        //     if(res.data.fine){  


        //         alert(res.data.message  + " your fine is " + res.data.fine )

        //        navigate("/PayFine")

        //     }
        //         IssueBooks();

        //  })

    }


    return (
        <div>
            <h1>Issued Books</h1>
            <div className='table-responsive-lg container '>
                <table className="table border shadow  table-bordered  border-primary">
                    <thead className="table-light table-bordered  border-primary ">
                        <tr >
                            <th scope='col' >S.No</th>
                            <th scope='col' >Name
                            </th>
                            <th scope='col'  >Book ID
                            </th>
                            <th scope='col'  >Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>1</td>
                            <td >Java Book</td>
                            <td >4</td>
                            <td><button className='btn btn-success rounded-pill' onClick={() => ReturnBook()}>return  book</button></td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default UserIssueBook
