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
  const [showPlan, setShowPlan] = useState<Set<string>>(new Set());

  const plans = [
    {
      name: "2 Day Plans",
      splits: [
        "Full Body", // Add the list of exercises across days here? >> Preview/Select, worth doing a modal?
        "Upper/Lower",
        "Push/Pull",
        "Arm Builder",
        "Chest Builder",
        "Leg Builder",
        "Back Builder",
      ],
    },
    {
      name: "3 Day Plans",
      splits: [
        "Full Body",
        "Upper/Lower",
        "Push/Pull/Legs",
        "Arm Builder",
        "Chest Builder",
        "Leg Builder",
        "Back Builder",
      ],
    },
    {
      name: "4 Day Plans",
      splits: [
        "Full Body",
        "Upper/Lower",
        "Push/Pull",
        "Push/Pull/Legs/Full Body",
        "Arm Builder",
        "Chest Builder",
        "Leg Builder",
        "Back Builder",
      ],
    },
    {
      name: "5 Day Plans",
      splits: [
        "Full Body",
        "Upper/Lower",
        "Push/Pull",
        "Push/Pull/Legs/Upper/Lower",
        "Arm Builder",
        "Chest Builder",
        "Leg Builder",
        "Back Builder",
      ],
    },
  ];

  const handleShowPlan = (day: string) => {
    setShowPlan((prevState) => {
      const newSet = new Set(prevState);
      if (newSet.has(day)) {
        newSet.delete(day);
      } else {
        newSet.add(day);
      }
      return newSet;
    });
  };

  return (
    <div>
      <h1>Premade</h1>
      <ul className="text-left">
        {plans.map((p) => (
          <li key={p.name}>
            <button key={p.name} onClick={() => handleShowPlan(p.name)}>
              {p.name}
            </button>
            {showPlan.has(p.name) && (
              <ul className="ml-4">
                {p.splits.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
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
