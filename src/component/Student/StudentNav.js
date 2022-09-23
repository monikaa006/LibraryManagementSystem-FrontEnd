import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaBars, FaPhone } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import NavbarM from '../Services/NavbarM';
import { Book, issueBook } from '../Services/StudentServices';

function Student() {
  let navigate = useNavigate();


  const Menu = () => {

    navigate('/StudentHome');
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
  useEffect(() => {
    loadBook();
  }, [])
  return (
    <>
      <div>
        <div>
          <Row>
            <Col>
              <img src="../../images/librarylogo.jpg" alt="Library Management System - Logo" style={{ float: "left", marginTop: "7px", height: "50px", width: "400px" }} />
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <FaPhone />
              <span className='ms-1' >Call us Now:</span>+91-9350679141
            </Col>
          </Row>
        </div>
        <NavbarM />
        <br />
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">DashBoard</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="/StudentHome" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/ViewBook" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">view Books</span></a>
                  </li>
                  <li>
                    <a href="/UserIssuebook" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Issued Book</span></a>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <div className="col py-3">
              <FaBars style={{ float: "left" }} onClick={Menu}></FaBars>
              <h2>welcome to Library Management System</h2>
              <p className="lead">
                “Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”<br />
                <h6 style={{ color: "darkblue" }}>― John Green, The Fault in Our Stars</h6>
              </p>
              <Row style={{ width: "94%" }}>
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
                <Col>
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
                <Col>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student
