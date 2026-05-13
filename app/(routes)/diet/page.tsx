import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { DietContent } from "./DietContent";

export const metadata: Metadata = {
  title: "Indian Diet Plans — Veg & Non-Veg for Muscle Gain & Weight Loss | FitBodyAtlas",
  description:
    "Expert Indian diet plans for muscle gain and weight loss. Includes vegetarian and non-veg meal plans using traditional Indian foods — dal, paneer, chicken, roti, and more. Get your personalized diet plan.",
  keywords: [
    "Indian diet plan for muscle gain",
    "vegetarian diet for muscle gain India",
    "non veg diet plan India",
    "Indian diet for weight loss",
    "veg diet plan for gym",
    "Indian bodybuilding diet",
    "paneer diet muscle gain",
    "Indian meal plan fitness",
    "calorie deficit diet India",
    "high protein Indian diet",
  ],
  alternates: { canonical: "https://fitbodyatlas.com/diet" },
  openGraph: {
    title: "Indian Diet Plans — Muscle Gain & Weight Loss | FitBodyAtlas",
    description:
      "Veg & non-veg Indian diet plans for every goal. Using everyday Indian foods like dal, paneer, roti, and chicken.",
    url: "https://fitbodyatlas.com/diet",
  },
};

// JSON-LD: FAQ Schema for Diet page AEO
const dietFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is vegetarian food enough for muscle gain in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Indian vegetarian foods are rich in protein. Paneer (18g/100g), Greek yogurt (10g/100g), chickpeas (15g/100g), dal (9g/100g), and tofu (8g/100g) can help you hit 150g+ protein per day on a purely vegetarian diet. See our Vegetarian Muscle Gain Diet Plan for a full meal schedule.",
      },
    },
    {
      "@type": "Question",
      name: "How many calories should I eat to lose weight in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate your TDEE first (use our free TDEE Calculator), then subtract 300–500 calories to create a sustainable deficit. For most Indians, this is between 1,500–2,000 calories per day depending on size and activity level. Never go below 1,200 calories for women or 1,500 for men.",
      },
    },
    {
      "@type": "Question",
      name: "What Indian foods are high in protein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top high-protein Indian foods: Paneer (18g per 100g), Chicken breast (31g per 100g), Eggs (6g per egg), Moong dal (9g per 100g), Chickpeas (15g per 100g), Soybean/tofu (8g per 100g), Greek yogurt (10g per 100g), Peanuts (26g per 100g), and Rajma (9g per 100g).",
      },
    },
  ],
};

export default function DietPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dietFaqSchema) }}
      />
      <Header />
      <main id="main-content">
        <DietContent />
      </main>
      <Footer />
    </>
  );
}
