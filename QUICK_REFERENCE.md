# Quick Reference Commands

## Development

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Debug build issues
npm run build -- --debug
```

## Git & Deployment

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "FitBodyAtlas - Complete fitness platform"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/fitbodyatlas.git
git branch -M main
git push -u origin main

# After that, just push changes with:
git add .
git commit -m "Your message"
git push
```

## Directory Structure

```
fitbodyatlas/
├── app/
│   ├── components/          # 10 reusable components
│   ├── (routes)/
│   │   ├── (home)/         # Homepage
│   │   ├── (workouts)/     # Workout pages
│   │   ├── (exercises)/    # Exercise DB
│   │   ├── (diet)/         # Diet plans
│   │   ├── (nutrition)/    # Nutrition guides
│   │   ├── (tools)/        # Calculators
│   │   ├── (blog)/         # Blog articles
│   │   └── (legal)/        # Legal pages
│   ├── layout.tsx          # Root layout + SEO
│   └── globals.css         # Global styles
├── lib/data/
│   ├── exercises.ts        # Exercise definitions
│   ├── diets.ts            # Diet plan definitions
│   └── tools.ts            # Calculator specs
├── public/
│   ├── robots.txt          # SEO crawler directives
│   └── sitemap.xml         # URL sitemap (22+ pages)
├── GETTING_STARTED.md      # 👈 START HERE
├── PROJECT_SUMMARY.md      # Quick overview
├── DEPLOYMENT.md           # Detailed deployment guide
├── README.md               # Project info
└── package.json            # Dependencies

```

## File Count Summary

```
Components:        10 files (Header, Footer, Hero, etc.)
Pages:            30+ files (workouts, exercises, diet, blog, etc.)
Data Models:       3 files (exercises, diets, tools)
Config Files:      5 files (next.config, tsconfig, etc.)
Documentation:     5 files (this guide, GETTING_STARTED, etc.)
```

## Key Technologies

```
Framework:     Next.js 16.2.4
Language:      TypeScript 5
Styling:       Tailwind CSS 4
Animations:    Framer Motion 12.38.0
Icons:         Lucide React 1.14.0
Build:         Turbopack (fastest Next.js builder)
```

## Deployment URLs (After Vercel Deployment)

```
Base URL:       https://fitbodyatlas.vercel.app
Exercises:      /exercises
Workouts:       /workouts
Workouts by Type: /workouts/chest|back|legs|shoulders|arms|abs
Diet Plans:     /diet
Nutrition:      /nutrition
Blog:           /blog
Tools:          /tools
Calorie Calc:   /tools/calorie
About:          /about
Contact:        /contact
Privacy:        /privacy
Disclaimer:     /disclaimer
Editorial:      /editorial
```

## Quick Edits

### Add New Exercise
```typescript
// File: lib/data/exercises.ts
const newExercise: Exercise = {
  id: "new-exercise",
  name: "Exercise Name",
  muscleGroups: ["Chest", "Triceps"],
  difficulty: "intermediate",
  equipment: ["Dumbbells"],
  instructions: [
    "Step 1...",
    "Step 2...",
    "Step 3...",
  ],
  commonMistakes: ["Mistake 1", "Mistake 2"],
  variations: ["Variation 1"],
  recommendedSets: 3,
  recommendedReps: "8-12",
  restPeriod: "90s",
  relatedExercises: ["exercise-id"],
};

// Add to exercises array
exercises.push(newExercise);
```

### Add New Page
```bash
# 1. Create directory
mkdir -p app/(routes)/new-section

# 2. Create page.tsx
# 3. Import components: Header, Footer
# 4. Add to sitemap.xml

# Example: app/(routes)/new-section/page.tsx
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Your content here */}
      </main>
      <Footer />
    </>
  );
}
```

### Update Sitemap
```xml
<!-- File: public/sitemap.xml -->
<url>
  <loc>https://fitbodyatlas.com/new-page</loc>
  <lastmod>2024-01-01</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

## Deployment Checklist

- [ ] Build passes (`npm run build` - no errors)
- [ ] All pages tested locally (`npm run dev`)
- [ ] Code pushed to GitHub
- [ ] Vercel project created and deployed
- [ ] Domain verified in Google Search Console
- [ ] Sitemap.xml submitted to Google
- [ ] Contact info updated (email, phone)
- [ ] Privacy policy customized
- [ ] Analytics set up
- [ ] Email backend configured

## Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Build fails | `rm -rf .next && npm run build` |
| TypeScript errors | Check import paths (use `@/`) |
| Icons missing | Verify lucide-react icon names |
| Images not showing | Add alt text and check path |

## First 30 Days Plan

**Week 1:**
- Deploy to Vercel
- Submit to Google Search Console
- Set up Google Analytics

**Week 2-3:**
- Add 20+ exercises
- Write 10 blog posts
- Create 5+ diet plans

**Week 4:**
- Add images/GIFs
- Configure email capture
- Monitor indexing progress

---

**Quick Start**: `npm run dev` then open http://localhost:3000

**Deploy**: Go to vercel.com and import GitHub repo

**Track**: Submit sitemap to Google Search Console

---

See **GETTING_STARTED.md** for detailed deployment guide.
