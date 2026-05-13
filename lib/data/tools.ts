export interface CalculatorTool {
  id: string;
  name: string;
  description: string;
  formula: string;
  inputs: Array<{
    label: string;
    unit: string;
    min?: number;
    max?: number;
  }>;
}

export const calculatorTools: CalculatorTool[] = [
  {
    id: "bmr",
    name: "BMR Calculator",
    description: "Basal Metabolic Rate - calories your body burns at rest",
    formula: "Harris-Benedict equation",
    inputs: [
      { label: "Age", unit: "years", min: 1, max: 120 },
      { label: "Weight", unit: "kg", min: 20, max: 300 },
      { label: "Height", unit: "cm", min: 50, max: 250 },
    ],
  },
  {
    id: "calorie",
    name: "Calorie Calculator",
    description: "Daily calorie needs based on activity level",
    formula: "TDEE = BMR × Activity Factor",
    inputs: [
      { label: "Age", unit: "years" },
      { label: "Weight", unit: "kg" },
      { label: "Height", unit: "cm" },
    ],
  },
  {
    id: "protein",
    name: "Protein Calculator",
    description: "Daily protein requirements for muscle building",
    formula: "Body Weight × 2 (grams)",
    inputs: [
      { label: "Weight", unit: "kg", min: 20, max: 300 },
      { label: "Goal", unit: "select" },
    ],
  },
  {
    id: "bmi",
    name: "BMI Calculator",
    description: "Body Mass Index - measure of body fat based on height and weight",
    formula: "BMI = Weight / (Height)²",
    inputs: [
      { label: "Weight", unit: "kg" },
      { label: "Height", unit: "cm" },
    ],
  },
  {
    id: "macros",
    name: "Macro Calculator",
    description: "Calculate daily macronutrient breakdown",
    formula: "Carbs 50%, Protein 30%, Fat 20% (adjustable)",
    inputs: [
      { label: "Daily Calories", unit: "kcal" },
      { label: "Goal", unit: "select" },
    ],
  },
  {
    id: "1rm",
    name: "One Rep Max",
    description: "Estimate your maximum lift",
    formula: "Epley Formula",
    inputs: [
      { label: "Weight Lifted", unit: "kg" },
      { label: "Reps Completed", unit: "reps" },
    ],
  },
];
