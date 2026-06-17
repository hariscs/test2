import "./page.css";
import type { Metadata } from "next";
import OurLocationsConnectionsMentalHealth from "@/components/pages/OurLocationsConnectionsMentalHealth";

export const metadata: Metadata = {
  title: "Connections Mental Health - District Behavioral Health",
  description: "",
  alternates: { canonical: "https://wordpress-1444306-6432440.cloudwaysapps.com/our_locations/connections-mental-health/" },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
};

export default function Page() {
  return <OurLocationsConnectionsMentalHealth />;
}
