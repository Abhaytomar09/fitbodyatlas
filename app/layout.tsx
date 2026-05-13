import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://fitbodyatlas.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FitBodyAtlas — India's #1 Fitness Platform | Workouts, Exercises & Diet Plans",
    template: "%s | FitBodyAtlas",
  },
  description:
    "FitBodyAtlas is India's complete fitness knowledge platform. Browse 1000+ exercises, body-part specific workouts, Indian veg & non-veg diet plans, TDEE calculator, beginner guides, and expert-backed nutrition advice.",
  keywords: [
    "fitness platform India",
    "workout plans India",
    "exercise database India",
    "Indian diet plans",
    "veg diet for muscle gain",
    "TDEE calculator India",
    "chest workout beginner",
    "push pull legs routine",
    "weight loss diet India",
    "gym workout India",
    "muscle gain diet India",
    "beginner gym guide India",
    "calorie calculator India",
    "bodybuilding India",
    "FitBodyAtlas",
  ],
  authors: [{ name: "FitBodyAtlas Editorial Team", url: BASE_URL }],
  creator: "FitBodyAtlas",
  publisher: "FitBodyAtlas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "FitBodyAtlas",
    title: "FitBodyAtlas — India's #1 Fitness Platform",
    description:
      "1000+ exercises, Indian diet plans, TDEE calculator & expert workout guides. India's most complete fitness knowledge platform.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "FitBodyAtlas — India's Complete Fitness Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitBodyAtlas — India's #1 Fitness Platform",
    description:
      "1000+ exercises, Indian diet plans, TDEE calculator & expert workout guides.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@FitBodyAtlas",
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "health & fitness",
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FitBodyAtlas",
  url: BASE_URL,
  description:
    "India's complete fitness knowledge platform with exercises, workouts, diet plans, and fitness calculators.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/exercises?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FitBodyAtlas",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "India's #1 fitness knowledge platform providing expert-backed exercises, workouts, diet plans, and fitness tools.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@fitbodyatlas.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://twitter.com/FitBodyAtlas",
    "https://www.instagram.com/fitbodyatlas",
    "https://www.youtube.com/@fitbodyatlas",
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Fitness",
    "Exercise",
    "Workout Plans",
    "Nutrition",
    "Diet Plans",
    "Bodybuilding",
    "Weight Loss",
    "Muscle Gain",
  ],
};

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: [
    "Workouts",
    "Exercises",
    "Diet Plans",
    "Nutrition",
    "Tools",
    "Blog",
  ],
  url: [
    `${BASE_URL}/workouts`,
    `${BASE_URL}/exercises`,
    `${BASE_URL}/diet`,
    `${BASE_URL}/nutrition`,
    `${BASE_URL}/tools`,
    `${BASE_URL}/blog`,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${outfit.variable} h-full`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B35" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-IN" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={BASE_URL} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
