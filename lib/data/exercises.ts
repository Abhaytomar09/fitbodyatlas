export interface Exercise {
  id: string;
  name: string;
  category: "chest" | "back" | "legs" | "shoulders" | "arms" | "abs";
  equipment: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  musclesWorked: string[];
  instructions: string[];
  commonMistakes: string[];
  variations: string[];
  sets: number;
  reps: string;
  rest: string;
  image?: string;
}

export const exercises: Exercise[] = [
  {
    id: "bench-press",
    name: "Dumbbell Bench Press",
    category: "chest",
    equipment: ["dumbbells", "bench"],
    difficulty: "beginner",
    musclesWorked: ["chest", "triceps", "shoulders"],
    instructions: [
      "Lie flat on a bench with a dumbbell in each hand at shoulder height",
      "Press the dumbbells upward until arms are fully extended",
      "Lower slowly back to shoulder height",
      "Repeat for desired reps",
    ],
    commonMistakes: [
      "Bouncing the weights",
      "Not maintaining control on descent",
      "Using too much weight",
    ],
    variations: [
      "Incline Dumbbell Press",
      "Decline Dumbbell Press",
      "Close Grip Dumbbell Press",
    ],
    sets: 4,
    reps: "8-12",
    rest: "90 seconds",
  },
  {
    id: "barbell-squat",
    name: "Barbell Back Squat",
    category: "legs",
    equipment: ["barbell", "rack"],
    difficulty: "intermediate",
    musclesWorked: ["quads", "glutes", "hamstrings", "core"],
    instructions: [
      "Place barbell across shoulders with feet shoulder-width apart",
      "Keep chest up and back straight",
      "Descend by bending hips and knees until parallel",
      "Drive through heels to return to starting position",
    ],
    commonMistakes: [
      "Knees caving inward",
      "Excessive forward lean",
      "Incomplete depth",
    ],
    variations: [
      "Front Squat",
      "Goblet Squat",
      "Bulgarian Split Squat",
    ],
    sets: 4,
    reps: "6-8",
    rest: "2 minutes",
  },
  {
    id: "deadlift",
    name: "Conventional Deadlift",
    category: "back",
    equipment: ["barbell"],
    difficulty: "intermediate",
    musclesWorked: ["back", "glutes", "hamstrings", "core"],
    instructions: [
      "Stand with feet hip-width apart, barbell over mid-foot",
      "Grip bar just outside legs",
      "Engage core and drive through heels",
      "Lift until standing upright",
      "Lower controlled back to ground",
    ],
    commonMistakes: [
      "Starting with hips too low",
      "Rounding the back",
      "Bar drifting from body",
    ],
    variations: [
      "Romanian Deadlift",
      "Sumo Deadlift",
      "Trap Bar Deadlift",
    ],
    sets: 3,
    reps: "5-6",
    rest: "2-3 minutes",
  },
  {
    id: "pushups",
    name: "Push-ups",
    category: "chest",
    equipment: [],
    difficulty: "beginner",
    musclesWorked: ["chest", "triceps", "shoulders", "core"],
    instructions: [
      "Start in plank position with hands shoulder-width apart",
      "Lower body until chest almost touches ground",
      "Push back to starting position",
      "Keep body straight throughout",
    ],
    commonMistakes: [
      "Hips sagging",
      "Elbows flaring out",
      "Partial range of motion",
    ],
    variations: [
      "Incline Push-ups",
      "Decline Push-ups",
      "Diamond Push-ups",
      "Wide Grip Push-ups",
    ],
    sets: 3,
    reps: "12-15",
    rest: "60 seconds",
  },
  {
    id: "pull-ups",
    name: "Pull-ups",
    category: "back",
    equipment: ["pull-up bar"],
    difficulty: "intermediate",
    musclesWorked: ["lats", "back", "biceps", "core"],
    instructions: [
      "Hang from pull-up bar with hands shoulder-width apart",
      "Pull body up until chin clears the bar",
      "Lower slowly to starting position",
      "Maintain control throughout movement",
    ],
    commonMistakes: [
      "Not achieving full range of motion",
      "Kipping motion",
      "Lack of control on descent",
    ],
    variations: [
      "Assisted Pull-ups",
      "Wide Grip Pull-ups",
      "Chin-ups",
      "Weighted Pull-ups",
    ],
    sets: 3,
    reps: "8-12",
    rest: "90 seconds",
  },
];

// Workouts data
export interface Workout {
  id: string;
  name: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  exercises: Array<{
    exerciseId: string;
    sets: number;
    reps: string;
  }>;
  estimatedTime: number; // in minutes
  image?: string;
}

export const workouts: Workout[] = [
  {
    id: "beginner-chest",
    name: "Beginner Chest Workout",
    category: "chest",
    difficulty: "beginner",
    description: "Perfect for beginners looking to build chest strength and size",
    exercises: [
      { exerciseId: "bench-press", sets: 3, reps: "8-12" },
      { exerciseId: "pushups", sets: 3, reps: "12-15" },
    ],
    estimatedTime: 30,
  },
  {
    id: "full-body-beginner",
    name: "Full Body Beginner Workout",
    category: "full-body",
    difficulty: "beginner",
    description: "Complete beginner routine hitting all major muscle groups",
    exercises: [
      { exerciseId: "barbell-squat", sets: 3, reps: "8-10" },
      { exerciseId: "bench-press", sets: 3, reps: "8-10" },
      { exerciseId: "deadlift", sets: 3, reps: "5-6" },
      { exerciseId: "pushups", sets: 3, reps: "10-12" },
    ],
    estimatedTime: 60,
  },
];
