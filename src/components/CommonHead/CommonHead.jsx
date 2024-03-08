import React from "react";
import { useLocation } from "react-router-dom";

const CommonHead = ({ openLeftPanel }) => {
  const rightContentStyle = {
    width: openLeftPanel ? "83%" : "100%",
    transition: "width 0.3s ease",
  };

  const location = useLocation();
  console.log(location);
  const { pathname } = location;
  const reqdPathname = pathname.substring(1);
  return (
    <>
      <div class="right_panel p-3" style={rightContentStyle}>
        <div class="col-xl-12 col-lg-12 col-sm-12 col-md-12 p-0">
          <div class="d_text p-3 mb-3 mt-4 mb-4 text-capitalize">
            {reqdPathname}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonHead;
