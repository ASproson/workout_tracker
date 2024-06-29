import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="space-x-4 text-center">
      <Link to={"/workout_tracker/"}>Home</Link>
      <Link to={"/currentWorkout"}>Current Workout</Link>
      <Link to={"/designNewPlan"}>Design New Workout Plan</Link>
      <Link to={"/progress"}>Progress</Link>
      <Link to={"/prevPlans"}>Previous Plans</Link>
    </div>
  );
};
