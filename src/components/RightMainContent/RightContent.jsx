import React from "react";
import "./RightMainContent.css";
import AttendanceDash from "../../Assets/Images/attendance_dashB.png";
import HomeworkDash from "../../Assets/Images/homework_dashB.png";
import AssignmentDash from "../../Assets/Images/assignment_dashB.png";
import QueryDash from "../../Assets/Images/query_dashB.png";
import NewsDash from "../../Assets/Images/news_dashB.png";
import CircularDash from "../../Assets/Images/circular_dashB.png";
import ChangepasswordDash from "../../Assets/Images/changepassword_dashB.png";
import LogoutDash from "../../Assets/Images/logout_dashB.png";
import { Link } from "react-router-dom";

const RightContent = ({ openLeftPanel }) => {
  const rightContentStyle = {
    width: openLeftPanel ? "83%" : "100%",
    transition: "width 0.3s ease",
  };
  return (
    <>
      <div class="right_panel p-3" style={rightContentStyle}>
        <div class="col-xl-12 col-lg-12 col-sm-12 col-md-12 p-0">
          <div class="d_text p-3 mb-3 mt-4 mb-4">Dashboard</div>
          <div class="ps-3 pe-3">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Link to={`/attendance`} className="text-decoration-none">
                  <div class="d_bg d-flex align-items-center">
                    <img src={AttendanceDash} class="img-fluid" />
                    <h1>
                      Attendance
                      <br />
                      <small>50</small>
                    </h1>
                  </div>
                </Link>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Link to={`/homework`} className="text-decoration-none">
                  <div class="d_bg d-flex align-items-center">
                    <img src={HomeworkDash} class="img-fluid" />
                    <h1>
                      Home Work
                      <br />
                      <small>100</small>
                    </h1>
                  </div>
                </Link>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Link to={`/assignment`} className="text-decoration-none">
                  <div class="d_bg d-flex align-items-center">
                    <img src={AssignmentDash} class="img-fluid" />
                    <h1>
                      Assignment
                      <br />
                      <small>100</small>
                    </h1>
                  </div>
                </Link>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Link to={`/query`} className="text-decoration-none">
                  <div class="d_bg d-flex align-items-center">
                    <img src={QueryDash} class="img-fluid" />
                    <h1>
                      Query
                      <br />
                      <small>100</small>
                    </h1>
                  </div>
                </Link>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Link to={`/news`} className="text-decoration-none">
                  <div class="d_bg d-flex align-items-center">
                    <img src={NewsDash} class="img-fluid" />
                    <h1>
                      News
                      <br />
                      <small>100</small>
                    </h1>
                  </div>
                </Link>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Link to={`/circular`} className="text-decoration-none">
                  <div class="d_bg d-flex align-items-center">
                    <img src={CircularDash} class="img-fluid" />
                    <h1>
                      Circular
                      <br />
                      <small>100</small>
                    </h1>
                  </div>
                </Link>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <Link to={`/changepassword`} className="text-decoration-none">
                  <div class="d_bg d-flex align-items-center">
                    <img src={ChangepasswordDash} class="img-fluid" />
                    <h1>Change Password</h1>
                  </div>
                </Link>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="d_bg d-flex align-items-center">
                  <img src={LogoutDash} class="img-fluid" />
                  <h1>logout</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="d_text p-3 mb-3 mt-4 mb-3">Add Home Work</div>
          <div class="bttn mb-3">
            <a href="">Add New</a>
            <a href="">Copy File</a>
            <a href="">Excel</a>
            <a href="">PDF</a>
            <a href="">Print</a>
          </div>
          <div id="stuc">
            <div class="table-responsive">
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th></th>
                    <th>Student Name</th>
                    <th>Home Work Title</th>
                    <th>Start</th>
                    <th>Finish</th>
                    <th>Classes</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>
                      <img src="IMAGES/fol.png" class="img-fluid" />
                    </td>
                    <td>Abhay</td>
                    <td>SST</td>
                    <td>01/07/2021</td>
                    <td>10/08/2021</td>
                    <td>X</td>
                    <td>Open</td>
                  </tr>
                  <tr>
                    <td>
                      <img src="IMAGES/fol.png" class="img-fluid" />
                    </td>
                    <td>Akshay</td>
                    <td>SST</td>
                    <td>01/07/2021</td>
                    <td>10/08/2021</td>
                    <td>XII</td>
                    <td>Open</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightContent;
