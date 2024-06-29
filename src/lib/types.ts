export interface Workout {
  day: string;
  collection: WorkoutData;
  id: string;
}

interface WorkoutData {
  id: number;
  name: string;
  exercises: Exercises[];
}

interface Exercises {
  name: string;
  id: number;
  sets: number;
  reps: number;
}

export interface WorkoutTableProps {
  exercises: Exercises[];
}
