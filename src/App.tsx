import { useState } from "react";
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

/**
 * Main controller for centering and responsive design
 * @returns
 */
const WorkoutContainer = () => {
  const [showWorkout, setShowWorkout] = useState(false);
  return (
    <div>
      <h1>Week #1</h1>
      <div className="flex">
        <h2 className="mr-2">Workout #1</h2>
        <button onClick={() => setShowWorkout(!showWorkout)}>Show</button>
      </div>
      {showWorkout && <WorkoutTable />}
    </div>
  );
};

/**
 * Show/hide toggle for this component, when title is clicked, exercise is shown
 * @returns
 */
const WorkoutTable = () => {
  const tableHeaders = [
    { id: 0, name: "Exercise" },
    { id: 2, name: "Sets" },
    { id: 1, name: "Reps" },
  ];

  const exercies = [
    { id: 0, exercise: "Bench Press", sets: 4, reps: 4 },
    { id: 1, exercise: "Deadlift", sets: 4, reps: 4 },
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
          {exercies.map((e) => (
            <tr key={e.id} className="border-2 border-black">
              <th scope="row" className="border-2 border-black">
                {e.exercise}
              </th>
              <td className="border-2 border-black">{e.reps}</td>
              <td className="border-2 border-black">{e.sets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
