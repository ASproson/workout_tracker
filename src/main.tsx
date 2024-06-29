import React from "react";
import ReactDOM from "react-dom/client";
import App, { Demo } from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/workout_tracker/",
    element: <App />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
