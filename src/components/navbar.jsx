import { useState } from "react";
import ImgUbic from "assets/images/all-icon/map.png";
import ImgEmail from "assets/images/all-icon/email.png";
import Logo from "assets/images/logo.png";
import ImgSupport from "assets/images/all-icon/support.png";
import Search from "components/search";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const handleCloseClick = () => {
    setIsSearchVisible(false);
  };

  return (
    <>
      <header id="header-part">
        <div className="header-top d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-contact text-lg-left text-center">
                  <ul>
                    <li>
                      <img src={ImgUbic} alt="icon" />
                      <span>127/5 Mark street, New York</span>
                    </li>
                    <li>
                      <img src={ImgEmail} alt="icon" />
                      <span>info@yourmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-opening-time text-lg-right text-center">
                  <p>Opening Hours: Monday to Saturday - 8 AM to 5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-logo-support pt-30 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="logo">
                  <a href="index-2.html">
                    <img src={Logo} alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="support-button float-right d-none d-md-block">
                  <div className="support float-left">
                    <div className="icon">
                      <img src={ImgSupport} alt="icon" />
                    </div>
                    <div className="cont">
                      <p>Need Help? Call us free</p>
                      <span>321 325 5678</span>
                    </div>
                  </div>
                  <div className="button float-left">
                    <a href="#" className="main-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-9 col-8">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/about"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          About us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/courses"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }>Courses</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/events"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }>Events</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/teachers"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }>Our teachers</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/blog"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }>Blog</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/shop"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }>Shop</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/contact"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }>Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                <div className="right-icon text-right">
                  <ul>
                    <li>
                      <a href="#" onClick={handleSearchClick}>
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag"></i>
                        <span>0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Search isVisible={isSearchVisible} onClose={handleCloseClick} />
    </>
  );
}

export default Navbar;
