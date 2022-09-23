import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavbarM() {
    const navigate = useNavigate();

    const logIn = () => {
        navigate("/LoginForm")

    }
    const Book = () => {
      navigate("/book")

  }
 
    const removeUser = localStorage.getItem("login");
    
    const logOut = () => {

        if (removeUser) {
            localStorage.removeItem("login");
           
            alert("logging Out Successfully");
            navigate("/")

        } else {
            alert("sign Up First")
        }
    }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img style={{ width: "100px" }} src='https://demo.fieldthemes.com/bookshop/intro/images/logo.png' alt="Responsive user"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {removeUser?
            <>
             <Nav.Link  onClick={Book}>Books</Nav.Link>
            <Nav.Link  onClick={logOut}>Logout</Nav.Link></>
            :<Nav.Link   onClick={logIn}>Login</Nav.Link>
            }
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarM;