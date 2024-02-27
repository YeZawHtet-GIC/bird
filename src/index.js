import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
//react router dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import BirdDetails from "./BirdDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bird/:id",
        element: <BirdDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);