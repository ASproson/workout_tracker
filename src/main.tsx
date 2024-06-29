import React from "react";
import ReactDOM from "react-dom/client";
import App, { Layout } from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CurrentWorkout } from "./pages/CurrentWorkout.tsx";
import { DesignNewWorkoutPlan } from "./pages/DesignNewWorkoutPlan.tsx";
import { PreviousWorkoutPlans } from "./pages/PreviousWorkoutPlans.tsx";
import { ProgressAnalytics } from "./pages/ProgressAnalytics.tsx";

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
