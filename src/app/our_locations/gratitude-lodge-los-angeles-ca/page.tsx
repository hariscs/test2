import type { Metadata } from "next";
import OurLocationsGratitudeLodgeLosAngelesCa from "@/components/pages/OurLocationsGratitudeLodgeLosAngelesCa";

export const metadata: Metadata = {
  title: "Gratitude Lodge - Los Angeles, CA - District Behavioral Health",
  description: "",
  alternates: { canonical: "https://wordpress-1444306-6432440.cloudwaysapps.com/our_locations/gratitude-lodge-los-angeles-ca/" },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
};

export default function Page() {
  return <OurLocationsGratitudeLodgeLosAngelesCa />;
}
