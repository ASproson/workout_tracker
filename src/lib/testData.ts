import { WorkoutProgram } from "./types";

// When a week is complete we then automatically create the next, ++'ing prev week's reps
export const workoutData: WorkoutProgram = {
  program_name: "Chest/Back/Side Delt Focus",
  object_id: "awd123fas", // DB generated
  is_current: false,
  program_complete: false,
  weeks: [
    {
      week_id: "awdasd2312a", // DB generated
      week_name: 1, // `${program_name} week_name`
      week_completed: false,
      workouts: [
        {
          day_id: "dawdasd213", // DB generated
          day: "Monday", // User generated
          day_completed: true,
          exercises: [
            {
              name: "Bench Press",
              sets: 4,
              reps: 10,
              exercise_id: "ex1",
            },
            {
              name: "Deadlift",
              sets: 4,
              reps: 10,
              exercise_id: "ex3",
            },
            {
              name: "Bicep Curl",
              sets: 4,
              reps: 10,
              exercise_id: "ex3",
            },
            {
              name: "Lateral Raise",
              sets: 4,
              reps: 10,
              exercise_id: "ex4",
            },
            {
              name: "Bentover Row",
              sets: 4,
              reps: 10,
              exercise_id: "ex5",
            },
          ],
        },
        {
          day_id: "asdgawawd315", // DB generated
          day: "Wednesday", // User generated
          day_completed: false,
          exercises: [
            {
              name: "Incline Bench Press",
              sets: 4,
              reps: 10,
              exercise_id: "ex6",
            },
            {
              name: "Squat",
              sets: 4,
              reps: 10,
              exercise_id: "ex7",
            },
            {
              name: "Bentover Row",
              sets: 4,
              reps: 10,
              exercise_id: "ex5",
            },
            {
              name: "Bicep Curl",
              sets: 4,
              reps: 10,
              exercise_id: "ex3",
            },
            {
              name: "Lateral Raise",
              sets: 4,
              reps: 10,
              exercise_id: "ex4",
            },
          ],
        },
      ],
    },
  ],
};
