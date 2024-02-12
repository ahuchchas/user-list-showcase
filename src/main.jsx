import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import AllUser from "./pages/AllUser";
import UserDetails from "./pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllUser />,
  },
  {
    path: "/user-details",
    element: <UserDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
