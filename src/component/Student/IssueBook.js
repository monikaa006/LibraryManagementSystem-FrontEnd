import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import axios from 'axios'


function IssueBook() {
    const navigate = useNavigate();

    const token = JSON.parse(sessionStorage.getItem('token'));
    console.log(token, "-----------------")
    const IssuedBook = async () => {
        await axios.post('',{headers: {
            'token': `${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/Json'
          } })
            .then((res) => {
                console.log(res.json);

                alert("issue book successfully")
                navigate('/StudentHome')
            })
            .catch((err) => {
                console.log(err)
                console.log(err.message)
            });

    }


    return (
        <>
            <br />
            <div style={{ backgroundImage: `url("https://www.reganagency.com/wp-content/uploads/2020/10/Library-Management.jpg")`, width: "100%", height: "900px" }}>
                <br /><br />
                <div style={{backgroundColor:"white",marginTop:"100px"}} className='container w-50 mx-auto shadow p-2'>
                   
                        
                            <h3 style={{marginLeft:"110px"}} className='text-center col-lg-6'>Issue Book</h3>
                            <Form  >
                          <div className='row'>
                                <Form.Group  className="mb-3 col-lg-6" controlId="formBasicName">
                                <Form.Label style={{color:"darkblue"}}>Book Name</Form.Label>
                                    <Form.Control type="text" name='book' placeholder="Enter book name" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicId">
                                  <Form.Label  style={{color:"darkblue"}}>book id</Form.Label>
                                    <Form.Control type="number" name='Id' placeholder="Book Id" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicId">
                                <Form.Label  style={{color:"darkblue"}}>User id</Form.Label>
                                    <Form.Control type="numbar" name='Id' placeholder="date of issuing  book" />
                                </Form.Group>
                                <Form.Group  style={{marginTop:"35px"}} className="mb-5 col-lg-6" controlId="formBasicButton">
                                    <Button variant="primary" className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }} type="submit" onClick={IssuedBook}>
                                        Issue Book
                                    </Button>
                                </Form.Group>
                                </div>
                            </Form>
                        
                   
                </div>
            </div>
        </>
    )
}

export default IssueBook
