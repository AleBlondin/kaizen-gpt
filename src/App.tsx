import React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Audit from "./pages/Audit";
import { GobalAuditResult } from "./types/audit";

// const auditResult1: GobalAuditResult = {
//   date: new Date("1/1/2022").toUTCString(),
//   stabilityScore: 4,
// };
// const auditResult2: GobalAuditResult = {
//   date: new Date("2/2/2022").toUTCString(),
//   stabilityScore: 7,
// };
// const auditResults = window.localStorage.getItem("auditResults");

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home auditResults={window.localStorage.getItem("auditResults") || ""} />
    ),
  },
  {
    path: "/audit",
    element: (
      <Audit
        addResult={(newResult: GobalAuditResult) => {
          const pastAuditResults: string =
            window.localStorage.getItem("auditResults") || "";
          window.localStorage.setItem(
            "auditResults",
            JSON.stringify([...JSON.parse(pastAuditResults), newResult])
          );
        }}
      />
    ),
  },
]);

function App() {
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          3S calculator
        </Typography>
      </AppBar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
