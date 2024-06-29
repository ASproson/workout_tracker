import { Workout } from "../App";

export const workoutData: Workout[] = [
  {
    id: "0",
    day: "Monday",
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
    id: "1",
    day: "Wednesday",
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
