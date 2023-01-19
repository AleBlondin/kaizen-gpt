import React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Audit from "./pages/Audit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/audit",
    element: <Audit/>,
  }
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
