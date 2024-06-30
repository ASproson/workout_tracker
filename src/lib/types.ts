export interface WorkoutProgram {
  program_name: string;
  object_id: string;
  is_current: boolean;
  program_complete: boolean;
  weeks: WorkoutWeek[];
}

interface WorkoutWeek {
  week_id: string;
  week_name: number;
  week_completed: boolean;
  workouts: DayWorkout[];
}

interface DayWorkout {
  day_id: string;
  day: string;
  day_completed: boolean;
  exercises: Exercises[];
}

interface Exercises {
  name: string;
  sets: number;
  reps: number;
}

export interface WorkoutTableProps {
  exercises: Exercises[];
}
