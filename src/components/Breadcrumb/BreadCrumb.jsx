import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./BreadCrumb.css"

const BreadCrumb = () => {
  const path = useLocation();
  const { pathname } = path;
  const reqdPath = pathname.substring(1);
  return (
    <>
      <div className="breadcrumb">
        {" "}
        <Link to={`/`} className="text-decoration-none">Dashboard</Link> &nbsp;/ {reqdPath}
      </div>
    </>
  );
};

export default BreadCrumb;
