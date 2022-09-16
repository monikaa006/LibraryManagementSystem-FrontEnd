import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'


function ViewBooks() {

  const [books, setBooks] = useState("");
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token, "-----------------")
  useEffect(() => {
    loadBook();
  }, [])
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
      })
    }

  };
  return (
    <div style={{ backgroundImage: " url('https://cphlibrary.org/wp-content/themes/CPH/img/CPHL_Patterns_About.jpg')" }}>
      <h1>books in libarary</h1>
      <div className='row '>
        <Row style={{ width: "94%" }} >
          <Col >
            <Card className='ms-2' style={{ width: '15rem' }}>
              <Card.Img src="https://i.pinimg.com/236x/96/84/df/9684df336d47d9157591ebe9c6bd0723--reference-book-student-teacher.jpg" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className='ms-2' style={{ width: '15rem' }}>
              <Card.Img src="https://www.dailyexcelsior.com/wp-content/uploads/2014/08/PGCC.jpg" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className='ms-2' style={{ width: '15rem' }}>
              <Card.Img src="https://www.dailyexcelsior.com/wp-content/uploads/2014/08/PGCC.jpg" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className='ms-2' style={{ width: '15rem' }}>
              <Card.Img src="https://www.dailyexcelsior.com/wp-content/uploads/2014/08/PGCC.jpg" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <br /><br />
    </div>
  )
}

export default ViewBooks