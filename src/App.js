
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Home';

import Login from './component/LoginForm';
import SignUpForm from './component/SignUpForm';
import StudentHome from './component/Student/StudentHome';
import IssueBook from './component/Student/IssueBook';
import About from './component/About';

import Dashboard from './component/Admin/Dashbroad';
import AddBook from './component/Admin/AddBook';
import Student from './component/Student/StudentNav';
import ViewBook from './component/Student/ViewBook';
import ReturnBook from './component/Student/ReturnBook';
import IssuedBook from './component/Admin/IssuedBook';
import ViewBooks from './component/Admin/ViewBook';
import RemoveBook from './component/Admin/RemoveBook';
import View from './component/View';
import Book from './component/Book';

function App() {
  return (
    
    <div className="App">
     
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/About' element={<About/>} />
      
      <Route exact path='/LoginForm' element={<Login/>} />
      <Route exact path='/SignUpForm' element={<SignUpForm/>} />
      <Route exact path='/StudentHome' element={<StudentHome/>} />
      <Route exact path='/IssueBook' element={<IssueBook/>} />
      <Route exact path='/Dashbroad' element={<Dashboard/>} />
      <Route exact path='/AddBook' element={<AddBook/>} />
      <Route exact path='/Student' element={<Student/>} />
      <Route exact path='/ViewBook' element={<ViewBook/>} />
      <Route exact path='/ReturnBook' element={<ReturnBook/>} />
      <Route exact path='/issuedBook' element={<IssuedBook/>} />
      <Route exact path='/ViewBooks' element={<ViewBooks/>} />
      <Route exact path='/RemoveBook' element={<RemoveBook/>} />
      <Route exact path='/View' element={<View/>} />
     <Route exact path='/Book'element={<Book/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
