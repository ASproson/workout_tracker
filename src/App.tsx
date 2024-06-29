import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return <WorkoutContainer />;
}

export const Layout = () => {
  return (
    <div className="h-screen p-4">
      <Nav />
      <Outlet />
    </div>
  );
};

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

export default App;

interface Workout {
  day: string;
  collection: WorkoutData;
  id: string;
}

interface WorkoutData {
  id: number;
  name: string;
  exercises: Exercises[];
}

interface Exercises {
  name: string;
  id: number;
  sets: number;
  reps: number;
}

const workoutData: Workout[] = [
  {
    id: "0",
    day: "Monday",
    collection: {
      id: 0,
      name: "Workout #1",
      exercises: [
        {
          id: 0,
          name: "Bench Press",
          sets: 4,
          reps: 10,
        },
        {
          id: 1,
          name: "Deadlift",
          sets: 4,
          reps: 10,
        },
        {
          id: 2,
          name: "Bicep Curl",
          sets: 4,
          reps: 10,
        },
        {
          id: 3,
          name: "Lateral Raise",
          sets: 4,
          reps: 10,
        },
        {
          id: 4,
          name: "Bentover Row",
          sets: 4,
          reps: 10,
        },
      ],
    },
  },
  {
    id: "1",
    day: "Wednesday",
    collection: {
      id: 1,
      name: "Workout #1",
      exercises: [
        {
          id: 0,
          name: "Incline Bench Press",
          sets: 4,
          reps: 10,
        },
        {
          id: 1,
          name: "Squat",
          sets: 4,
          reps: 10,
        },
        {
          id: 2,
          name: "Bentover Row",
          sets: 4,
          reps: 10,
        },
        {
          id: 3,
          name: "Bicep Curl",
          sets: 4,
          reps: 10,
        },
        {
          id: 4,
          name: "Lateral Raise",
          sets: 4,
          reps: 10,
        },
      ],
    },
  },
];

/**
 * Main controller for rendering workouts for the week
 * Renders title: 'Workout #N' and a show/hide for <WorkoutTable />
 * We fill an array with false and flip the boolean based on workout id to show/hide
 * @returns
 */
const WorkoutContainer = () => {
  const [workouts, setWorkouts] = useState<Workout[]>();
  const [showWorkout, setShowWorkout] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Fetch workouts
    setWorkouts(workoutData);
  }, []);

  // Might be best having something to save this permanently
  const handleShowWorkout = (id: string) => {
    setShowWorkout((prevState) => {
      const newSet = new Set(prevState);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (!workouts) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1>Week #1</h1>
      {workouts.map((w) => (
        <div key={w.day}>
          <div className="flex">
            <h2 className="mr-2">Workout {w.day}</h2>
            <button onClick={() => handleShowWorkout(w.id)}>
              {showWorkout.has(w.id) ? "Hide" : "Show"}
            </button>
          </div>
          {showWorkout.has(w.id) && (
            <WorkoutTable exercises={w.collection.exercises} />
          )}
        </div>
      ))}
    </div>
  );
};

interface WorkoutTableProps {
  exercises: Exercises[];
}

/**
 * Show/hide toggle for this component, when title is clicked, exercise is shown
 * Memoized to prevent re-renders based on state flipping
 * @returns
 */
const WorkoutTable: React.FC<WorkoutTableProps> = ({ exercises }) => {
  const tableHeaders = [
    { id: 0, name: "Exercise" },
    { id: 2, name: "Sets" },
    { id: 1, name: "Reps" },
  ];

  return (
    <div>
      <table className="border-2 border-black text-center w-full">
        <thead className="border-2 border-black">
          <tr>
            {tableHeaders.map((h) => (
              <th key={h.id} scope="col" className="border-2 border-black">
                {h.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {exercises.map((e) => (
            <tr key={e.id} className="border-2 border-black">
              <th
                scope="row"
                className="border-2 border-black text-left max-w-4"
              >
                {e.name}
              </th>
              <td className="border-2 border-black">{e.sets}</td>
              <td className="border-2 border-black">{e.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
