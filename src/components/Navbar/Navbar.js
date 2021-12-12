import { AssignmentTurnedInOutlined, FeaturedPlayListOutlined, Home, Language, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
<header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none header">
         <h4>Gcet QnA Forum</h4>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li className="icon_adjust"><a href="/" className="nav-link px-2 link-secondary"><Home fontSize="large" /></a></li>
          <li className="icon_adjust"><a href="/" className="nav-link px-2 link-dark"><FeaturedPlayListOutlined fontSize="large" /></a></li>
          <li className="icon_adjust"><a href="/" className="nav-link px-2 link-dark"><AssignmentTurnedInOutlined fontSize="large" /></a></li>
          <li className="icon_adjust"><a href="/" className="nav-link px-2 link-dark"><PeopleAltOutlined fontSize="large" /></a></li>
          <li className="icon_adjust"><a href="/" className="nav-link px-2 link-dark"><NotificationsOutlined fontSize="large" /></a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex">
          
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          
         <div className="icon_adjust">
         <a href="/" className="nav-link px-2 link-dark"> <Search fontSize="large"/></a>
         </div>
          
        </form>
        
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">   
        
          <li className="end_icon_adjust"><a href="/" className="nav-link px-2 link-secondary"><Language fontSize="large" /></a></li>
          <li className="end_icon_adjust"><button type="button" class="btn btn-outline-dark">Add question</button></li>
          <div className="dropdown text-end end_icon_adjust">
          <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="40" height="40" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="/">New project...</a></li>
            <li><a className="dropdown-item" href="/">Settings</a></li>
            <li><a className="dropdown-item" href="/">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Sign out</a></li>
          </ul>
         
        </div>
        </ul>
      
       
      </div>
    </div>
  </header>
    )
}

export default Navbar
