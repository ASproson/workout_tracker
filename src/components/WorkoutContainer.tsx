import { useState, useEffect } from "react";
import { twoDayChestBackSideDeltFocus } from "../lib/testData";
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
  const [currentWeek, setCurrentWeek] = useState<{
    week_id: string;
    week_name: number;
    week_completed: boolean;
  }>();

  useEffect(() => {
    // Fetch workouts
    setWorkouts(twoDayChestBackSideDeltFocus);
    const currWeek = workouts?.weeks.find((week) => !week.week_completed);
    if (currWeek) {
      setCurrentWeek({
        week_id: currWeek.week_id,
        week_name: currWeek.week_name,
        week_completed: currWeek.week_completed,
      });
    } else {
      // All weeks are completed, show final week (possibly change later)
      const lastWeek =
        twoDayChestBackSideDeltFocus.weeks[
          twoDayChestBackSideDeltFocus.weeks.length - 1
        ];
      setCurrentWeek({
        week_id: lastWeek.week_id,
        week_name: lastWeek.week_name,
        week_completed: lastWeek.week_completed,
      });
    }
  }, []);

  // Might be best having something to save this permanently
  const handleShowWorkout = (day_id: string) => {
    setShowWorkout((prevState) => {
      const newSet = new Set(prevState);
      if (newSet.has(day_id)) {
        newSet.delete(day_id);
      } else {
        newSet.add(day_id);
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
        {workouts.program_name} - Week {currentWeek?.week_name}
      </h1>
      {workouts.weeks
        .find((week) => week.week_id === currentWeek?.week_id)
        ?.workouts.map((w) => (
          <div key={w.day_id}>
            <div className="flex">
              <h2 className="mr-2 my-2">Workout {w.day}</h2>
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

const tableHeaders = [
  { id: 0, name: "Exercise" },
  { id: 1, name: "Sets" },
  { id: 2, name: "Reps" },
  { id: 3, name: "Weight" },
];

/**
 * Show/hide toggle for this component, when title is clicked, exercise is shown
 * Memoized to prevent re-renders based on state flipping
 * @returns
 */
const WorkoutTable: React.FC<WorkoutTableProps> = ({ exercises }) => {
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
          {exercises.map((e, idx) => (
            <tr key={e.exercise_id + idx} className="border-2 border-black">
              <th
                scope="row"
                className="border-2 border-black text-left max-w-4"
              >
                {e.name}
              </th>
              <td className="border-2 border-black">{e.sets}</td>
              <td className="border-2 border-black">{e.reps}</td>
              <td className="border-2 border-black">{e.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
