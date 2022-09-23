
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaBars, FaPhone } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom';
import NavbarM from '../Services/NavbarM';
import { Book, issueBook } from '../Services/StudentServices';


function StudentHome() {
  let navigate = useNavigate();
  const { id } = useParams();
  const Menu = () => {
    navigate('/Student')
  }
  const [books, setBooks] = useState("");
  const [isIssuedBook, setIsIssuedBook] = useState(false)
  const token = JSON.parse(localStorage.getItem('token'));
  const user_id = JSON.parse(localStorage.getItem('id'));
  console.log(token, "-----------------")

  const loadBook = async () => {
    console.log(token)
    if (token) {
      const book= Book()
      setBooks(book)
    }
  };
  const IssueBooks = async (book_id, book_name) => {
    let usersId = { issuedbook: { user_id, book_id, book_name } };
    issueBook(usersId)
 
    alert("issued book successfully")
  }
  console.log(IssueBooks.length)
  useEffect(() => {
    loadBook();
  }, [])

  return (
    <>
        <div>                 
                    <Row>                  
                         <Col> 
                          <img src="../../images/librarylogo.jpg" alt="Library Management System - Logo" style={{ float: "left", marginTop: "7px",height:"50px",width:"400px" }} />
                              </Col>
                              <Col style={{marginTop:"20px" }}>
                                <FaPhone />
                            <span className='ms-1' >Call us Now:</span>+91-9350679141
                             </Col>                 
                    </Row>
                </div>       
      <NavbarM/>

      <FaBars style={{ float: "left" }} onClick={Menu}></FaBars>
      <div className="col py-3">
        <h2>welcome to Library Management System</h2>
        <p className="lead">
          “Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”<br />
          <h6 style={{ color: "darkblue" }}>― John Green, The Fault in Our Stars</h6>

        </p>
      </div>
      <div>
        <Row style={{ width: "94%" }} >
          <Col >
            <Card className='ms-2' style={{ width: '15rem' }}>
              <Card.Img src=".../../images/book.jpg" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>

                <Button className='btn btn-primary' onClick={() => IssueBooks()} to={`/`} variant="primary">Issue</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className='ms-2' style={{ width: '15rem' }}>
              <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zcbU1v5YUf6xfyUWQy6KqcsF2XQGgI8Uo3uB1gF8Rwaxo7Hs28G9xaWMj3GcKk-30fQ&usqp=CAU" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>
                <Button className='btn btn-primary' onClick={() => IssueBooks()} to={`/`} variant="primary">Issue</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className='ms-2' style={{ width: '15rem' }}>
              <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmR8JDivKoAdfO9oHSO13liZjuR9XTVZVQpg&usqp=CAU" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>
                <Button className='btn btn-primary' onClick={() => IssueBooks()} to={`/`} variant="primary">Issue</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className='ms-2' style={{ width: '15rem' }}>
              <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLkCNoXjBUUs1dkhPNRagwwJ6o4MBUKNAug&usqp=CAU" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>
                <Button className='btn btn-primary' onClick={() => IssueBooks()} to={`/`} variant="primary">Issue</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br /> <br />
      </div>
    </>
  )
}

export default StudentHome
