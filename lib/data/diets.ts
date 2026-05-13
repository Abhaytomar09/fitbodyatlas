export interface DietPlan {
  id: string;
  name: string;
  type: "veg" | "non-veg" | "mixed";
  goal: "muscle-gain" | "fat-loss" | "maintenance";
  difficulty: "beginner" | "intermediate" | "advanced";
  calories: number;
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  meals: Meal[];
  description: string;
}

export interface Meal {
  name: string;
  foods: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  timing: string;
}

export const dietPlans: DietPlan[] = [
  {
    id: "muscle-gain-veg",
    name: "High Protein Veg Muscle Gain Diet",
    type: "veg",
    goal: "muscle-gain",
    difficulty: "intermediate",
    calories: 2800,
    protein: 180,
    carbs: 280,
    fat: 70,
    description: "Complete vegetarian diet plan designed for muscle growth",
    meals: [
      {
        name: "Breakfast",
        timing: "7:00 AM",
        foods: [
          "4 whole eggs",
          "2 slices whole wheat bread",
          "1 banana",
          "Greek yogurt",
        ],
        calories: 600,
        protein: 35,
        carbs: 60,
        fat: 20,
      },
      {
        name: "Mid Morning Snack",
        timing: "10:00 AM",
        foods: ["Protein shake", "1 apple", "Almonds (30g)"],
        calories: 350,
        protein: 30,
        carbs: 35,
        fat: 10,
      },
      {
        name: "Lunch",
        timing: "1:00 PM",
        foods: [
          "1 cup paneer (cottage cheese)",
          "2 cups brown rice",
          "Mixed vegetables",
          "1 tbsp olive oil",
        ],
        calories: 800,
        protein: 50,
        carbs: 80,
        fat: 25,
      },
      {
        name: "Pre-Workout",
        timing: "4:00 PM",
        foods: ["Banana", "White bread", "Peanut butter"],
        calories: 300,
        protein: 10,
        carbs: 50,
        fat: 10,
      },
      {
        name: "Post-Workout",
        timing: "6:30 PM",
        foods: ["Whey protein shake", "Dextrose/rice"],
        calories: 400,
        protein: 40,
        carbs: 50,
        fat: 2,
      },
      {
        name: "Dinner",
        timing: "8:00 PM",
        foods: [
          "Soy chunks or tofu (150g)",
          "Sweet potato",
          "Steamed broccoli",
          "1 tsp ghee",
        ],
        calories: 450,
        protein: 35,
        carbs: 50,
        fat: 15,
      },
    ],
  },
  {
    id: "fat-loss-non-veg",
    name: "Non-Veg Fat Loss Diet",
    type: "non-veg",
    goal: "fat-loss",
    difficulty: "intermediate",
    calories: 1800,
    protein: 150,
    carbs: 150,
    fat: 50,
    description: "High protein, low calorie diet for fat loss",
    meals: [
      {
        name: "Breakfast",
        timing: "7:00 AM",
        foods: ["2 boiled eggs", "1 slice whole wheat toast", "Tomato"],
        calories: 250,
        protein: 18,
        carbs: 20,
        fat: 8,
      },
      {
        name: "Lunch",
        timing: "1:00 PM",
        foods: [
          "150g grilled chicken",
          "1 cup basmati rice",
          "Steamed veggies",
        ],
        calories: 500,
        protein: 45,
        carbs: 50,
        fat: 10,
      },
      {
        name: "Dinner",
        timing: "7:00 PM",
        foods: ["150g grilled fish", "Sweet potato", "Green salad"],
        calories: 450,
        protein: 40,
        carbs: 45,
        fat: 15,
      },
    ],
  },
];

export const indianFoods = {
  highProteinVeg: [
    "Paneer",
    "Tofu",
    "Soy chunks",
    "Chickpeas",
    "Lentils",
    "Beans",
    "Milk",
    "Yogurt",
  ],
  highProteinNonVeg: [
    "Chicken breast",
    "Fish",
    "Eggs",
    "Mutton",
    "Prawns",
    "Beef",
  ],
  carbs: [
    "Brown rice",
    "Basmati rice",
    "Whole wheat bread",
    "Oats",
    "Sweet potato",
    "Bajra",
    "Ragi",
  ],
  healthy: [
    "Olive oil",
    "Ghee",
    "Coconut oil",
    "Almonds",
    "Walnuts",
    "Peanuts",
  ],
};
