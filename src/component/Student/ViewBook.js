import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Card, Col, Row } from 'react-bootstrap'

function ViewBook() {

  const [books, setBooks] = useState("");
  const token = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    loadBook();
  }, [])
  const loadBook = async () => {
    console.log(token)
    if (token) {

      await axios.get("https://0059-122-168-72-226.in.ngrok.io/book", {
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
              <Card.Img src=".../../images/book.jpg" />
              <Card.Body>
                <Card.Title>To Kill a Mockingbird</Card.Title>
                <Card.Text>Harper Lee, 1990</Card.Text>
                <Card.Text><u>book quantity-</u>5</Card.Text>

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
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
      <br /><br />
    </div>
  )
}

export default ViewBook
