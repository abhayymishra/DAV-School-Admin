import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import LeftPanel from "../LeftPanel/LeftPanel";
import bell from "../../Assets/Images/bell.png";
import mailLogo from "../../Assets/Images/mail-logo.png";
import notification from "../../Assets/Images/noti.png";
import sliderIcon from "../../Assets/Images/slide_pan.png";
import userlogo from "../../Assets/Images/user.png";
import Main from "../Main/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ handleleftPanel }) => {
  const [Dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const handleDropdown = (e) => {
    e.stopPropagation();
    setDropdown(!Dropdown);
  };

  const handleClickOutside = (event) => {
    console.log("clicked outside");
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-2 p-2 col-lg-2 col-sm-2 col-md-2">
              <h1>Logo</h1>
            </div>
            <div class="col-xl-6 col-lg-6 col-sm-6 col-md-6 ps-3">
              <ul>
                <li>
                  <img src={bell} class="img-fluid" />
                  <span class="badge badge-danger">8</span>
                </li>
                <li>
                  <img src={mailLogo} class="img-fluid" />
                  <span class="badge badge-danger">3</span>
                </li>
                <li>
                  <img src={notification} class="img-fluid" />
                  <span class="badge badge-danger">8</span>
                </li>
              </ul>
              <a id="srl" onClick={handleleftPanel}>
                <img src={sliderIcon} class="img-fluid" />
              </a>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-4 col-md-4 pe-3">
              <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"></div>
                <div class="pe-5">
                  <div class="navbar-menu-wrapper d-flex align-items-stretch">
                    <ul class="navbar-nav">
                      <li class="nav-item nav-profile dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          id="profileDropdown"
                          href="#"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          ref={dropdownRef}
                        >
                          <div class="nav-profile-text">
                            <p class="mb-1 text-black">
                              <img src={userlogo} alt="image" />
                              User Name
                              <FontAwesomeIcon
                                icon={faCaretDown}
                                style={{ paddingLeft: "10px" }}
                                onClick={handleDropdown}
                              />
                            </p>
                          </div>
                        </a>
                        {Dropdown && (
                          <div
                            class="dropdown-menu navbar-dropdown"
                            aria-labelledby="profileDropdown"
                          >
                            <a class="dropdown-item" href="#">
                              {" "}
                              Activity Log{" "}
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                              {" "}
                              Signout{" "}
                            </a>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
