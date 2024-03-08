import React from "react";
import { Link } from "react-router-dom";
import "./Attendance.css";
import CommonHead from "../CommonHead/CommonHead";
import BreadCrumb from "../Breadcrumb/BreadCrumb";

const Attendance = ({openLeftPanel}) => {
  
  return (
    <>
      <BreadCrumb/>
      <CommonHead openLeftPanel={openLeftPanel}/>
    </>
  );
};

export default Attendance;
