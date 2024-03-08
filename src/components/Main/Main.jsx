import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightContent from "../RightMainContent/RightContent";
import HomeworkContent from "../HomeworkContent/HomeworkContent";
import { Routes, Route } from "react-router-dom";
import Assignment from "../Assignment/Assignment";
import Query from "../Query/Query";
import News from "../News/News";
import Circular from "../Circular/Circular";
import ChangePassword from "../ChangePassword/ChangePassword";
import Attendance from "../Attendance/Attendance";

const Main = () => {
  const [openLeftPanel, setopenLeftPanel] = useState(false);
  const handleleftPanel = () => {
    setopenLeftPanel(!openLeftPanel);
  };

  return (
    <>
      <Navbar handleleftPanel={handleleftPanel} />
      <div class="content d-block p-0">
        {openLeftPanel ? <LeftPanel /> : ""}
        <Routes>
          <Route
            path="/"
            element={<RightContent openLeftPanel={openLeftPanel} />}
          />
          <Route
            path="/homework"
            element={<HomeworkContent openLeftPanel={openLeftPanel} />}
          />
          <Route
            path="/assignment"
            element={<Assignment openLeftPanel={openLeftPanel} />}
          />
          <Route
            path="/query"
            element={<Query openLeftPanel={openLeftPanel} />}
          />
          <Route
            path="/news"
            element={<News openLeftPanel={openLeftPanel} />}
          />
          <Route
            path="/circular"
            element={<Circular openLeftPanel={openLeftPanel} />}
          />
          <Route
            path="/changepassword"
            element={<ChangePassword openLeftPanel={openLeftPanel} />}
          />
          <Route
            path="/attendance"
            element={<Attendance openLeftPanel={openLeftPanel} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default Main;
