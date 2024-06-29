import React from "react";
import ReactDOM from "react-dom/client";
import App, {
  CurrentWorkout,
  DesignNewWorkoutPlan,
  Layout,
  PreviousWorkoutPlans,
  ProgressAnalytics,
} from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/workout_tracker/",
        element: <App />,
      },
      {
        path: "/currentWorkout",
        element: <CurrentWorkout />,
      },
      {
        path: "/designNewPlan",
        element: <DesignNewWorkoutPlan />,
      },
      {
        path: "/progress",
        element: <ProgressAnalytics />,
      },
      {
        path: "/prevPlans",
        element: <PreviousWorkoutPlans />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
