import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { HeroSection } from "@/app/components/HeroSection";
import { FeaturedCategories } from "@/app/components/FeaturedCategories";
import { ExerciseFinder } from "@/app/components/ExerciseFinder";
import { PopularTools } from "@/app/components/PopularTools";
import { TrendingArticles } from "@/app/components/TrendingArticles";
import { Testimonials } from "@/app/components/Testimonials";
import { EmailCapture } from "@/app/components/EmailCapture";
import { CTASection } from "@/app/components/CTASection";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "FitBodyAtlas — India's #1 Fitness Platform | Workouts, Exercises & Diet Plans",
  description:
    "Build muscle, lose fat & train smarter with India's complete fitness platform. 1000+ exercises, body-part workouts, veg & non-veg Indian diet plans, TDEE calculator, and expert fitness guides.",
  alternates: {
    canonical: "https://fitbodyatlas.com",
  },
  openGraph: {
    title: "FitBodyAtlas — Build Muscle, Lose Fat & Train Smarter",
    description:
      "India's complete fitness knowledge platform. Expert workouts, Indian diet plans, and interactive fitness calculators.",
    url: "https://fitbodyatlas.com",
    type: "website",
  },
};

// JSON-LD: FAQ Schema for AEO (Answer Engine Optimization)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TDEE and how do I calculate it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns per day. It includes your Basal Metabolic Rate (BMR) plus calories burned through physical activity. Use our free TDEE Calculator at fitbodyatlas.com/tools to get your personalized TDEE based on age, weight, height, and activity level.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best workout plan for beginners in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For beginners in India, a Full Body 3-day workout (Monday, Wednesday, Friday) is ideal. Start with compound movements like squats, deadlifts, bench press, and rows. Train 3 days per week, eat in a slight caloric surplus with 1.6–2g protein per kg bodyweight, and sleep 7–8 hours. Check our Beginner Guides section for complete step-by-step programs.",
      },
    },
    {
      "@type": "Question",
      name: "How much protein should I eat per day to build muscle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To build muscle, aim for 1.6 to 2.2 grams of protein per kilogram of bodyweight per day. For a 70kg person, that's 112–154g of protein daily. Good Indian sources include paneer, dal, chickpeas (for vegetarians), and chicken, eggs, fish (for non-vegetarians). Use our Macro Calculator to get personalized targets.",
      },
    },
    {
      "@type": "Question",
      name: "Is a vegetarian diet good for muscle gain in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a vegetarian diet can absolutely support muscle gain in India. High-protein vegetarian foods include paneer (18g per 100g), Greek yogurt (10g per 100g), dal (9g per 100g), chickpeas (15g per 100g), tofu (8g per 100g), and peanuts (26g per 100g). You can hit your protein targets with a well-planned vegetarian Indian diet.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to lose weight with exercise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With a consistent calorie deficit of 500 calories/day and regular exercise, you can expect to lose 0.5–1kg per week safely. Most people see visible results in 4–8 weeks. Combining cardio with strength training and following a proper diet plan gives the fastest sustainable results. Use our Calorie Calculator to determine your deficit target.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best exercises for chest at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best chest exercises at home without equipment include: Push-ups (standard, wide-grip, diamond), Pike push-ups, Decline push-ups (feet elevated), Plyometric push-ups, and Dips (using chairs). Aim for 3–4 sets of 8–15 reps with progressive overload. See our full Chest Workout Guide for detailed instructions.",
      },
    },
  ],
};

// JSON-LD: WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FitBodyAtlas — India's #1 Fitness Platform",
  url: "https://fitbodyatlas.com",
  description:
    "India's complete fitness knowledge platform with exercises, workouts, diet plans, and interactive calculators.",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".hero-description", ".faq-answer"],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fitbodyatlas.com",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <FeaturedCategories />
        <ExerciseFinder />
        <PopularTools />
        <TrendingArticles />
        <FAQSection />
        <Testimonials />
        <EmailCapture />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
