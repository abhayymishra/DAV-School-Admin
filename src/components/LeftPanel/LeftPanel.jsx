import React, { useState } from "react";
import "./LeftPanel.css";
import DashboardLogo from "../../Assets/Images/dashboardlogo.png";
import AttendanceLogo from "../../Assets/Images/attendancelogo.png";
import HomeworkLogo from "../../Assets/Images/homeworklogo.png";
import AssignmentLogo from "../../Assets/Images/assignmentlogo.png";
import QueryLogo from "../../Assets/Images/querylogo.png";
import NewsLogo from "../../Assets/Images/newslogo.png";
import UserPic from "../../Assets/Images/userpic.png";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import { Link } from "react-router-dom";
import HomeworkContent from "../HomeworkContent/HomeworkContent";

const LeftPanel = () => {
  return (
    <>
      <div class="left_panel">
        <div class="le_srl">
          <div class="user_panel p-3 pt-4 d-flex align-items-center">
            <div class="col-5">
              <img src={UserPic} class="img-fluid d-block p-0" />
              <div class="clearfix"></div>
            </div>
            <div class="col-7 p-0">
              <h2>User Name</h2>
              <h3>Designation</h3>
              <span>Status :</span> <span>Online</span>
            </div>
          </div>
          <ul class="nav flex-column flex-nowrap">
            <li class="nav-item">
              <Link class="nav-link" to={`/`}>
                <img src={DashboardLogo} />
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link collapsed"
                href="#submenu1"
                data-toggle="collapse"
                to={`attendance`}
              >
                <img src={AttendanceLogo} />
                Attendance
                <i class="fa fa-angle-right anim" aria-hidden="true"></i>
              </Link>
              <div class="collapse" id="submenu1" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  <li class="nav-item">
                    <a class="nav-link py-0" href="#">
                      Menu Name
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link py-0" href="#">
                      Menu Name
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link py-0" href="#">
                      Menu Name
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link py-0" href="#">
                      Menu Name
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/homework`}>
                <img src={HomeworkLogo} />
                Home Work
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to={`/assignment`}>
                <img src={AssignmentLogo} />
                Assignment
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/query`}>
                <img src={QueryLogo} />
                Query
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/news`}>
                <img src={NewsLogo} />
                News
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/circular`}>
                <img src={NewsLogo} />
                Circular
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/changepassword`}>
                <img src={NewsLogo} />
                Change Password
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src={NewsLogo} />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
