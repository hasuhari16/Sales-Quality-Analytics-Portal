import React, { useState } from "react";

export default function Dashboards() {
  const [dash, setDash] = useState("Sales");

  return (
    <div>
      <button onClick={() => setDash("Sales")}>Sales Dashboard</button>
      <button onClick={() => setDash("Quality")}>Quality Dashboard</button>

      {dash === "Sales" && (
        <iframe
          title="Sales Dashboard"
          src="https://public.tableau.com/views/Complete-SalesDashboard_wrk_/Monthwise?:embed=true&:showVizHome=no"
          width="100%"
          height="800px"
          frameBorder="0"
        />
      )}

      {dash === "Quality" && (
        <iframe
          title="Quality Dashboard"
          src="https://public.tableau.com/views/Quality_17710662105740/Quality-Monthwise?:embed=true&:showVizHome=no"
          width="100%"
          height="800px"
        />
      )}
    </div>
  );
}
