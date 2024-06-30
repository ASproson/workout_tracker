import { useState, useEffect } from "react";
import { workoutData } from "../lib/testData";
import { WorkoutProgram, WorkoutTableProps } from "../lib/types";

/**
 * Main controller for rendering workouts for the week
 * Renders title: 'Workout #N' and a show/hide for <WorkoutTable />
 * We fill an array with false and flip the boolean based on workout id to show/hide
 * @returns
 */
export const WorkoutContainer = () => {
  const [workouts, setWorkouts] = useState<WorkoutProgram>();
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
      <h1>
        {workouts.program_name} {workouts.week.week_name}
      </h1>
      {workouts.week.workouts.map((w) => (
        <div key={w.day_id}>
          <div className="flex">
            <h2 className="mr-2">Workout {w.day}</h2>
            <button onClick={() => handleShowWorkout(w.day_id)}>
              {showWorkout.has(w.day_id) ? "Hide" : "Show"}
            </button>
          </div>
          {showWorkout.has(w.day_id) && (
            <WorkoutTable exercises={w.exercises} />
          )}
        </div>
      ))}
    </div>
  );
};

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
            <tr key={e.name} className="border-2 border-black">
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
