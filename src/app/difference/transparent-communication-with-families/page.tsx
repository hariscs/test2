import "./page.css";
import type { Metadata } from "next";
import DifferenceTransparentCommunicationWithFamilies from "@/components/pages/DifferenceTransparentCommunicationWithFamilies";

export const metadata: Metadata = {
  title: "Transparent Communication With Families - District Behavioral Health",
  description: "",
  alternates: { canonical: "https://wordpress-1444306-6432440.cloudwaysapps.com/difference/transparent-communication-with-families/" },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
};

export default function Page() {
  return <DifferenceTransparentCommunicationWithFamilies />;
}
