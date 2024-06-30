import { useState } from "react";

export const DesignNewWorkoutPlan = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-4">
        <WorkoutPlanBuilder />
      </div>
    </div>
  );
};

export const WorkoutPlanBuilder = () => {
  const [premade, setPremade] = useState(false);
  const [custom, setCustom] = useState(false);

  return (
    <div className="text-center">
      <div className="mb-4">
        <button
          onClick={() => {
            setPremade(!premade);
            setCustom(false);
          }}
        >
          Premade Workout Plans
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={() => {
            setCustom(!custom);
            setPremade(false);
          }}
        >
          Create New Workout Plan
        </button>
      </div>
      {premade && <PremadeWorkoutPlans />}
      {custom && <CustomWorkoutPlans />}
    </div>
  );
};

export const PremadeWorkoutPlans = () => {
  return (
    <div>
      <h1>Premade</h1>
    </div>
  );
};

export const CustomWorkoutPlans = () => {
  return (
    <div>
      <h1>Custom</h1>
    </div>
  );
};
