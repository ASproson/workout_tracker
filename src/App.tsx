import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="h-screen ">
      <h1 className=" text-center">Testing workflow push</h1>
      <WorkoutContainer />
    </div>
  );
}

export default App;

interface Workout {
  day: number;
  collection: WorkoutData;
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
    day: 1,
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
    day: 2,
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
  const [showWorkout, setShowWorkout] = useState<boolean[]>(
    new Array(20).fill(false)
  );

  useEffect(() => {
    // Fetch workouts
    setWorkouts(workoutData);
  }, []);

  const handleShowWorkout = (id: number) => {
    setShowWorkout((prevState) => {
      const newShowWorkout = [...prevState];
      newShowWorkout[id] = !newShowWorkout[id];
      return newShowWorkout;
    });
  };

  if (!workouts) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1>Week #1</h1>
      {workouts &&
        workouts.map((w) => (
          <div key={w.day}>
            <div className="flex">
              <h2 className="mr-2">Workout #{w.day}</h2>
              <button onClick={() => handleShowWorkout(w.collection.id)}>
                {showWorkout[w.collection.id] ? "Hide" : "Show"}
              </button>
            </div>
            {showWorkout[w.collection.id] && (
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
const WorkoutTable: React.FC<WorkoutTableProps> = React.memo(
  ({ exercises }) => {
    const tableHeaders = [
      { id: 0, name: "Exercise" },
      { id: 2, name: "Sets" },
      { id: 1, name: "Reps" },
    ];

    return (
      <div>
        <table className="border-2 border-black text-center">
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
                <th scope="row" className="border-2 border-black">
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
  }
);
