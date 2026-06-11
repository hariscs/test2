import type { Metadata } from "next";
import ThankYou from "@/components/pages/ThankYou";

export const metadata: Metadata = {
  title: "Thank You Page | District Behavioral Health",
  description: "While you wait, explore our facilities, see what your care experience will look like, and learn what happens next.",
  alternates: { canonical: "https://wordpress-1444306-6432440.cloudwaysapps.com/thank-you/" },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
};

export default function Page() {
  return <ThankYou />;
}
