import React, { useEffect, useState } from 'react'
import { issueBook, Returnbook } from '../Services/StudentServices';

function UserIssueBook() {
    const [issuedBook, setIssuedBook] = useState("")
    const IssueBooks = async () => {
     setIssuedBook(issuedBook())
     console.log(issuedBook)
        
    }
    useEffect(() => {
        IssueBooks();
    }, [])

    const ReturnBook = async () => {
        alert(" book return  successfully")
        //  let user_id={user:{id}}
        //  localStorage.setItem("IssueId",id)
        //      Returnbook(user_id)
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
