import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaBars, FaPhone } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom';
import StudentNav from './StuNavbar';

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

      await axios.get("https://64bc-122-168-72-226.in.ngrok.io/book", {
        headers: {
          "Authorization": `${token}`,
          "ngrok-skip-browser-warning": "*"
        }
      }).then((res) => {
        console.log(res.data)
        setBooks(res.data)
        console.log(books, "--------------issue book---------------")
      }).catch((err) => {
        console.log(err)
      })
    }
  };

  const IssueBooks = async () => {
    //  let usersId={ issuedbook:{user_id, book_id,book_name}};
    //   await axios.post(`https://64bc-122-168-72-226.in.ngrok.io/issuedbooks`,usersId, {
    //     headers: {
    //       "Authorization": `${token}`,
    //       "ngrok-skip-browser-warning": "*"

    //     }
    //   })
    //     .then((res) => {
    //       console.log(res.data);
    //       setIsIssuedBook(true)

    //       alert("issue book successfully")
    //       console.log(isIssuedBook)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       console.log(err.message)
    //      })
    alert("issued book successfully")


  }
  console.log(IssueBooks.length)
  useEffect(() => {
    loadBook();
  }, [])

  return (
    <>
      <header className="header-section  ng-scope">
        <div>
          <a style={{ float: "left" }} href="/" className="site-logo"><img src=".../../images/librarylogo.jpg" alt="Library Management System - Logo" style={{ marginTop: "7px", height: "50px", width: "300px" }} /></a>
          <div className="header-info">
            <div className="hf-item ">
              <a style={{ marginLeft: "40%" }} href="/" className="site-logo">
                <img src="https://us.123rf.com/450wm/putracetol/putracetol1805/putracetol180500840/101178983-pixel-book-logo-icon-design.jpg?ver=6" style={{ width: "80px" }} alt="GEM Logo" /></a>
              <FaPhone className='ms-2' />
              <span className='ms-1' >Call us Now:</span>+91-9350679141
            </div>
          </div>
        </div>
      </header>
      <StudentNav />

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
