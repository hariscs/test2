import type { Metadata } from "next";
import OurLocationsGratitudeLodgeLongBeachCa from "@/components/pages/OurLocationsGratitudeLodgeLongBeachCa";

export const metadata: Metadata = {
  title: "Gratitude Lodge - Long Beach, CA - District Behavioral Health",
  description: "",
  alternates: { canonical: "https://wordpress-1444306-6432440.cloudwaysapps.com/our_locations/gratitude-lodge-long-beach-ca/" },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
};

export default function Page() {
  return <OurLocationsGratitudeLodgeLongBeachCa />;
}
