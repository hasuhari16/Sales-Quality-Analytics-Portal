import React from "react";

export default function QualityDah() {
  return (
    <>
      <div className="cnt">
        <h1 className="dashTitle">Quality Dashboard</h1>
        <a
          href="https://public.tableau.com/app/profile/hariharasudhan.sp4151/viz/Quality_17710662105740/Quality-Monthwise?publish=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="viewBtn"
        >
          View in Tableau Public
        </a>
      </div>
      <div className="dashCont">
        <iframe
          title="Quality Dashboard"
          src="https://public.tableau.com/views/Quality_17710662105740/Quality-Monthwise?:embed=true&:showVizHome=no"
          width="100%"
          height="900px"
          frameBorder="0"
        />
      </div>
    </>
  );
}
