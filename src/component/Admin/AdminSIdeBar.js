import React from 'react'
const AdminSideBar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="/"><h5>Digital Library</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
               
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/IssuedBook"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Issued Books</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/AddBook"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Add Book</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/RemoveBook"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Remove Book</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/ViewBooks"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">View Books</span></a></li>
               
            </ul>
       </div>
    )
}
 
export default AdminSideBar