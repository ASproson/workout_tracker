import { ExerciseList } from "./types";

export const exercisesTable: ExerciseList[] = [
  // Chest exercises
  { id: "ex1", name: "Bench Press", muscleGroup: "Chest" },
  { id: "ex2", name: "Incline Bench Press", muscleGroup: "Chest" },
  { id: "ex3", name: "Dumbbell Fly", muscleGroup: "Chest" },
  { id: "ex4", name: "Cable Fly", muscleGroup: "Chest" },
  { id: "ex5", name: "Chest Press Machine", muscleGroup: "Chest" },
  { id: "ex6", name: "Pec Deck Fly", muscleGroup: "Chest" },
  { id: "ex7", name: "Decline Bench Press", muscleGroup: "Chest" },

  // Back exercises
  { id: "ex8", name: "Deadlift", muscleGroup: "Back" },
  { id: "ex9", name: "Pull Up", muscleGroup: "Back" },
  { id: "ex10", name: "Chin Up", muscleGroup: "Back" },
  { id: "ex11", name: "Bentover Row", muscleGroup: "Back" },
  { id: "ex12", name: "Seated Row", muscleGroup: "Back" },
  { id: "ex13", name: "Lat Pulldown", muscleGroup: "Back" },
  { id: "ex14", name: "Cable Row", muscleGroup: "Back" },
  { id: "ex15", name: "T-Bar Row", muscleGroup: "Back" },
  { id: "ex16", name: "Good Morning", muscleGroup: "Back" },
  { id: "ex17", name: "Landmine Row", muscleGroup: "Back" },
  { id: "ex18", name: "Single Arm Row", muscleGroup: "Back" },

  // Biceps exercises
  { id: "ex19", name: "Bicep Curl", muscleGroup: "Biceps" },
  { id: "ex20", name: "Hammer Curl", muscleGroup: "Biceps" },
  { id: "ex21", name: "Barbell Curl", muscleGroup: "Biceps" },
  { id: "ex22", name: "Preacher Curl", muscleGroup: "Biceps" },
  { id: "ex23", name: "Spider Curl", muscleGroup: "Biceps" },
  { id: "ex24", name: "Incline Dumbbell Curl", muscleGroup: "Biceps" },

  // Triceps exercises
  { id: "ex25", name: "Tricep Pushdown", muscleGroup: "Triceps" },
  { id: "ex26", name: "Overhead Tricep Extension", muscleGroup: "Triceps" },
  { id: "ex27", name: "Skull Crusher", muscleGroup: "Triceps" },
  { id: "ex28", name: "Dips", muscleGroup: "Triceps" },
  { id: "ex29", name: "Tricep Dips", muscleGroup: "Triceps" },
  { id: "ex30", name: "Close-Grip Bench Press", muscleGroup: "Triceps" },
  { id: "ex31", name: "Cable Tricep Extension", muscleGroup: "Triceps" },

  // Shoulders exercises
  { id: "ex32", name: "Lateral Raise", muscleGroup: "Shoulders" },
  { id: "ex33", name: "Shoulder Press", muscleGroup: "Shoulders" },
  { id: "ex34", name: "Arnold Press", muscleGroup: "Shoulders" },
  { id: "ex35", name: "Front Raise", muscleGroup: "Shoulders" },
  { id: "ex36", name: "Rear Delt Fly", muscleGroup: "Shoulders" },
  { id: "ex37", name: "Face Pull", muscleGroup: "Shoulders" },
  { id: "ex38", name: "Landmine Press", muscleGroup: "Shoulders" },
  { id: "ex39", name: "Reverse Fly", muscleGroup: "Shoulders" },
  { id: "ex40", name: "Scapular Pull-Up", muscleGroup: "Shoulders" },

  // Legs exercises
  { id: "ex41", name: "Squat", muscleGroup: "Legs" },
  { id: "ex42", name: "Leg Press", muscleGroup: "Legs" },
  { id: "ex43", name: "Leg Curl", muscleGroup: "Legs" },
  { id: "ex44", name: "Leg Extension", muscleGroup: "Legs" },
  { id: "ex45", name: "Calf Raise", muscleGroup: "Legs" },
  { id: "ex46", name: "Seated Calf Raise", muscleGroup: "Legs" },
  { id: "ex47", name: "Standing Calf Raise", muscleGroup: "Legs" },
  { id: "ex48", name: "Hack Squat", muscleGroup: "Legs" },
  { id: "ex49", name: "Bulgarian Split Squat", muscleGroup: "Legs" },
  { id: "ex50", name: "Step Up", muscleGroup: "Legs" },
  { id: "ex51", name: "Single Leg Deadlift", muscleGroup: "Legs" },
  { id: "ex52", name: "Hip Thrust", muscleGroup: "Legs" },
  { id: "ex53", name: "Romanian Deadlift", muscleGroup: "Legs" },
  { id: "ex54", name: "Glute Bridge", muscleGroup: "Legs" },
  { id: "ex55", name: "Cable Kickback", muscleGroup: "Legs" },
  { id: "ex56", name: "Lying Leg Curl", muscleGroup: "Legs" },
  { id: "ex57", name: "Sumo Deadlift", muscleGroup: "Legs" },
  { id: "ex58", name: "Walking Lunges", muscleGroup: "Legs" },
  { id: "ex59", name: "Pistol Squat", muscleGroup: "Legs" },
  { id: "ex60", name: "Single Leg Squat", muscleGroup: "Legs" },
  { id: "ex61", name: "Single Leg Glute Bridge", muscleGroup: "Legs" },
  { id: "ex62", name: "Zercher Squat", muscleGroup: "Legs" },
  { id: "ex63", name: "Resistance Band Squat", muscleGroup: "Legs" },
  { id: "ex64", name: "Resistance Band Deadlift", muscleGroup: "Legs" },

  // Core exercises
  { id: "ex65", name: "Plank", muscleGroup: "Core" },
  { id: "ex66", name: "Side Plank", muscleGroup: "Core" },
  { id: "ex67", name: "Mountain Climber", muscleGroup: "Core" },
  { id: "ex68", name: "Bicycle Crunch", muscleGroup: "Core" },
  { id: "ex69", name: "V-Up", muscleGroup: "Core" },
  { id: "ex70", name: "Hanging Leg Raise", muscleGroup: "Core" },
  { id: "ex71", name: "Ab Wheel Rollout", muscleGroup: "Core" },
  { id: "ex72", name: "Russian Twist", muscleGroup: "Core" },
  { id: "ex73", name: "Hollow Hold", muscleGroup: "Core" },
  { id: "ex74", name: "Woodchopper", muscleGroup: "Core" },
  { id: "ex75", name: "Windmill", muscleGroup: "Core" },
  { id: "ex76", name: "Suitcase Carry", muscleGroup: "Core" },

  // Cardio exercises
  { id: "ex77", name: "Jump Rope", muscleGroup: "Cardio" },
  { id: "ex78", name: "Sprint", muscleGroup: "Cardio" },
  { id: "ex79", name: "Rowing", muscleGroup: "Cardio" },
  { id: "ex80", name: "Elliptical", muscleGroup: "Cardio" },
  { id: "ex81", name: "Cycling", muscleGroup: "Cardio" },
  { id: "ex82", name: "Swimming", muscleGroup: "Cardio" },
  { id: "ex83", name: "Stair Climber", muscleGroup: "Cardio" },
];