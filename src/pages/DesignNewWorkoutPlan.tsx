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
  return (
    <div className="text-center">
      <div className="mb-4">
        <button>Premade Workout Plans</button>
      </div>
      <div>
        <button>Create New Workout Plan</button>
      </div>
    </div>
  );
};

export const PremadeWorkoutPlans = () => {};

export const CustomWorkoutPlans = () => {};
