export interface WorkoutProgram {
  program_name: string;
  object_id: string;
  is_current: boolean;
  program_complete: boolean;
  duration: number;
  automatic_progression: boolean;
  weeks: WorkoutWeek[];
}

export interface WorkoutWeek {
  week_id: string;
  week_name: number;
  week_completed: boolean;
  workouts: DayWorkout[];
}

export interface DayWorkout {
  day_id: string;
  day: string;
  day_completed: boolean;
  exercises: Exercises[];
}

export interface Exercises {
  name: string;
  sets: number;
  reps: number;
  exercise_id: string;
  weight: number;
}

export interface WorkoutTableProps {
  exercises: Exercises[];
}

export interface ExerciseList {
  name: string;
  id: string;
  muscleGroup: string;
}

export interface WorkoutCategoryProps {
  category: string;
  plans: Plan[];
}

export interface Plan {
  program_name: string;
  program_id: string;
  program: Program;
}

export interface Program {
  description: string;
  duration: number;
  day_one_exercises: string[];
  day_two_exercises: string[];
}

export interface WorkoutPlansProps {
  plan: Plan;
}

export interface ExerciseListProps {
  title: string;
  exercises: string[];
  description?: string;
}
