import { redirect } from "next/navigation";

// The root app/page.tsx redirects users to the full-featured homepage
// located at app/(routes)/page.tsx which includes all components.
export default function RootPage() {
  redirect("/");
}
