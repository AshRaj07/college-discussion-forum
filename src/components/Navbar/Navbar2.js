import React from "react";
import {
  AssignmentTurnedInOutlined,
  FeaturedPlayListOutlined,
  Home,
  Language,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@material-ui/icons";
import "./Navbar.css"
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import { auth } from "../../firebase";
import QuestionModal from "../Modal/QuestionModal";


const Navbar2 = () => {

  const user = useSelector(selectUser);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow pt-3 pb-3 bg-white rounded ">
      <div className="container-fluid ">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none header"
        >
          <h4 className="mx-5"><strong>College Discussion Forum</strong></h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="icon_adjust">
              <a href="/" className="nav-link px-2 link-secondary">
                <Home fontSize="large" />
              </a>
            </li>
            <li className="icon_adjust">
              <a href="/" className="nav-link px-2 link-dark">
                <FeaturedPlayListOutlined fontSize="large" />
              </a>
            </li>
            <li className="icon_adjust">
              <a href="/" className="nav-link px-2 link-dark">
                <AssignmentTurnedInOutlined fontSize="large" />
              </a>
            </li>
            <li className="icon_adjust">
              <a href="/" className="nav-link px-2 link-dark">
                <PeopleAltOutlined fontSize="large" />
              </a>
            </li>
            <li className="icon_adjust">
              <a href="/" className="nav-link px-2 link-dark">
                <NotificationsOutlined fontSize="large" />
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />

            <div className="icon_adjust">
              <a href="/" className="nav-link px-2 link-dark">
                {" "}
                <Search fontSize="large" />
              </a>
            </div>
          </form>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="end_icon_adjust">
              <a href="/" className="nav-link px-2 link-secondary">
                <Language fontSize="large" />
              </a>
            </li>
            <li className="end_icon_adjust">
              {/* <button type="button" class="btn btn-outline-dark">
                Add question
              </button> */}
              <QuestionModal name="Ask Question" cname="btn btn-outline-dark" />
            </li>
            <div className="dropdown text-end end_icon_adjust">
              <a
                href="/"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.photo}
                  alt="mdo"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li onClick={() => {auth.signOut();window.location.reload();}}>
                  <a className="dropdown-item" href="/">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </ul>
          {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
