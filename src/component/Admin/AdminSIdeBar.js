import React from 'react'
const AdminSideBar = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="/"><h5>Digital Library</h5></a></li>
                <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="/"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/IssuedBook"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Issued Books</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/AddBook"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3">Add Book</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/ViewBooks"><i className="fas fa-atom font-weight-bold"></i> <span className="ml-3">View Books</span></a></li>

            </ul>
        </div>
    )
}

export default AdminSideBar