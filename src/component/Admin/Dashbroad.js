import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import AdminSideBar from './AdminSIdeBar';

const Dashboard = () => {
    const [Books, setBooks] = useState([])
    const token = JSON.parse(localStorage.getItem('token'));
    const RemoveBook = async (id) => {
        alert("remove book successfully")
        // await axios.delete(`https://64bc-122-168-72-226.in.ngrok.io/book/${id}`, {
        //     headers: {
        //         "Authorization": `${token}`,
        //         "ngrok-skip-browser-warning": "*"
        //     }
        // })
        // loaduser();
    }
    const loaduser = async () => {
        console.log(token)
        await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res.data)
            setBooks(res.data)
        })
    };
    useEffect(() => {
        loaduser();
    }, [])
    return (
        <>
            <div>
                <AdminNav />
                <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                        <AdminSideBar />
                        <div className="col main pt-5 mt-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                            <h4 >Book Details and Records</h4>
                            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <strong>Data and Records</strong> Learn more about employee
                            </div>
                            <div className="row mb-3">

                                <div className="col-xl-3 col-sm-6 py-2">
                                    <div className="card text-white bg-danger h-100">
                                        <div className="card-body bg-danger">
                                            <div className="rotate">
                                                <i className="fa fa-list fa-4x"></i>
                                            </div>
                                            <h6 className="text-uppercase">Users</h6>
                                            <h1 className="display-4">87</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 py-2">
                                    <div className="card text-white bg-info h-100">
                                        <div className="card-body bg-info">
                                            <div className="rotate">
                                                <i className="fab fa-twitter fa-4x"></i>
                                            </div>
                                            <h6 className="text-uppercase"> Total Books</h6>
                                            <h1 className="display-4">{Books.length}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 py-2">
                                    <div className="card text-white bg-warning h-100">
                                        <div className="card-body">
                                            <div className="rotate">
                                                <i className="fa fa-share fa-4x"></i>
                                            </div>
                                            <h6 className="text-uppercase">Issued Book</h6>
                                            <h1 className="display-4">3</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row ">
                                <div >
                                    <h5 className="mt-3 mb-3 text-secondary">
                                        Check More Records of Books
                                    </h5>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th> S.No</th>
                                                    <th>Book</th>
                                                    <th>Author</th>
                                                    <th>Edition</th>
                                                    <th>quantity</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Books.slice(0, 5).map((book, index) =>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{book.name}</td>
                                                        <td>{book.username}</td>
                                                        <td>{book.address.zipcode}</td>
                                                        <td>3</td>
                                                        <td><button className='btn btn-danger rounded-pill' onClick={() => RemoveBook(book.id)}>remove book</button></td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard