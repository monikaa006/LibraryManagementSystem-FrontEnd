import axios from 'axios';
import React, { useEffect, useState } from 'react'

function IssuedBook() {
    const [issuedBook, setIssuedBook] = useState("")
    const token = JSON.parse(localStorage.getItem('token'));
    const IssueBooks = async () => {

        await axios.get(`https://64bc-122-168-72-226.in.ngrok.io/issuedbooks`, {
            headers: {
                "Authorization": `${token}`,
                "ngrok-skip-browser-warning": "*"
            }
        })
            .then((res) => {
                console.log(issuedBook)
                setIssuedBook(res.data.issuedbooks)
            })
            .catch((err) => {
                console.log(err)
                console.log(err.message)
            });
    }
    useEffect(() => {
        IssueBooks();
    }, [])
    return (
        <div>
            <div>
                <h1>Issued Books </h1>
                <div className='table-responsive-lg container '>
                    <table className="table border shadow  table-bordered  border-primary">
                        <thead className="table-light table-bordered  border-primary ">
                            <tr >
                                <th scope='col' >S.No</th>
                                <th scope='col' >Name
                                </th>
                                <th scope='col'  >Book ID
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>1</td>
                                <td >java</td>
                                <td > 4</td>
                            </tr>
                            <tr >
                                <td>2</td>
                                <td >taps A tells</td>
                                <td > 5</td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default IssuedBook
