import { useState } from "react";
import { workoutProgramsTable } from "../lib/workoutProgramTable";
import {
  WorkoutCategoryProps,
  WorkoutPlansProps,
  ExerciseListProps,
} from "../lib/types";

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
        {premade && <PremadeWorkoutPlans />}
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
      {custom && <CustomWorkoutPlans />}
    </div>
  );
};

export const PremadeWorkoutPlans = () => (
  <div>
    <ul className="text-left">
      {workoutProgramsTable.map((categoryData, index) => (
        <WorkoutCategory
          key={index}
          category={categoryData.category}
          plans={categoryData.plans}
        />
      ))}
    </ul>
  </div>
);

const WorkoutCategory = ({ category, plans }: WorkoutCategoryProps) => {
  const [showPlan, setShowPlan] = useState(false);

  const handleToggle = () => setShowPlan(!showPlan);

  return (
    <li>
      <button onClick={handleToggle}>{category}</button>
      {showPlan && (
        <ul className="ml-4">
          {plans.map((plan) => (
            <WorkoutPlan key={plan.program_id} plan={plan} />
          ))}
        </ul>
      )}
    </li>
  );
};

const WorkoutPlan = ({ plan }: WorkoutPlansProps) => {
  const [showPlan, setShowPlan] = useState(false);
  return (
    <li key={plan.program_id} onClick={() => setShowPlan(!showPlan)}>
      <button>{plan.program_name}</button>
      {showPlan && (
        <>
          <ExerciseList
            title="Day One Exercises:"
            description={plan.program.description}
            exercises={plan.program.day_one_exercises}
          />
          <ExerciseList
            title="Day Two Exercises:"
            exercises={plan.program.day_two_exercises}
          />
        </>
      )}
    </li>
  );
};

const ExerciseList = ({ title, exercises, description }: ExerciseListProps) => (
  <div className="my-2">
    <p className="mb-2">{description}</p>
    <h4>{title}</h4>
    <ul>
      {exercises.map((exercise, idx) => (
        <li key={idx} className="ml-4">
          {exercise}
        </li>
      ))}
    </ul>
  </div>
);

export const CustomWorkoutPlans = () => {
  return (
    <div>
      <h1>Custom</h1>
    </div>
  );
};
