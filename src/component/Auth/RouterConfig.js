import { Route, Routes } from 'react-router-dom'
import Home from '../Home';
import Login from '../Services/LoginForm';
import SignUpForm from '../Services/SignUpForm';
import StudentHome from '../Student/StudentHome';
import About from '../Services/About';
import Dashboard from '../Admin/Dashbroad';
import AddBook from '../Admin/AddBook';
import Student from '../Student/StudentNav';
import ViewBook from '../Student/ViewBook';
import IssuedBook from '../Admin/IssuedBook';
import ViewBooks from '../Admin/ViewBook';
import Book from '../Student/Book';
import React from 'react'
import ProtectedRoute from './ProtectedRoute';
import UserIssueBook from '../Student/UserIssueBook';
import PayFine from '../Student/PayFine';



function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/LoginForm' element={<Login />} />
        <Route path='/SignUpForm' element={<SignUpForm />} />
        <Route path='/StudentHome' element={<ProtectedRoute Cmp={StudentHome} />} />
        <Route path='/Dashboard' element={<ProtectedRoute Cmp={Dashboard} />} />
        <Route path='/AddBook' element={<ProtectedRoute Cmp={AddBook} />} />
        <Route path='/Student' element={<ProtectedRoute Cmp={Student} />} />
        <Route path='/ViewBook' element={<ProtectedRoute Cmp={ViewBook} />} />
        <Route path='/issuedBook' element={<ProtectedRoute Cmp={IssuedBook} />} />
        <Route path='/userIssuebook' element={<ProtectedRoute Cmp={UserIssueBook} />} />
        <Route path="/PayFine" element={<PayFine />} />
        <Route path='/ViewBooks' element={<ProtectedRoute Cmp={ViewBooks} />} />
        <Route path="*" element={<p style={{ color: "red" }}>There's nothing here: 404!</p>} />
        <Route path='/Book' element={<Book />} />

      </Routes>
    </div>
  )
}

export default RouterConfig
