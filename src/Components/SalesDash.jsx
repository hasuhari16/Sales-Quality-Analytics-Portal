import React from "react";

export default function SalesDash() {
  return (
    <>
      <div className="cnt">
        <h1 className="dashTitle">Sales Dashboard</h1>
        <a
          href="https://public.tableau.com/app/profile/hariharasudhan.sp4151/viz/Complete-SalesDashboard_wrk_/Monthwise?publish=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="viewBtn"
        >
          View in Tableau Public
        </a>
      </div>
      <div className="dashCont">
        <iframe
          title="Sales Dashboard"
          src="https://public.tableau.com/views/Complete-SalesDashboard_wrk_/Monthwise?:embed=true&:showVizHome=no"
          width="100%"
          height="900px"
          frameBorder="0"
        />
      </div>
    </>
  );
}
