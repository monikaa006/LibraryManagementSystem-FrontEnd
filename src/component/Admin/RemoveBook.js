import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'

function RemoveBook() {
   const navigate=useNavigate();
    const RemovedBook = () => {
       
        alert("REmove book successfully")
       navigate('/AdminHome')
        }
  return (
    
       <>
        <br/>
        <div style={{backgroundImage: `url("https://www.reganagency.com/wp-content/uploads/2020/10/Library-Management.jpg")` , width:"100%" , height:"900px"}}>
        <div className='container w-50 mx-auto shadow p-2'>
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Remove Book in library</h3>
                    <Form >

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">

                            <Form.Control type="text" name='book' placeholder="Enter book name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicId">

                            <Form.Control type="number" name='Id' placeholder="Book Id" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicButton">
                            <Button variant="primary" className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }} type="submit" onClick={RemovedBook}>
                               Remove Book
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </section>
        </div>
        </div>
        </>
    
   
  )
}

export default RemoveBook
