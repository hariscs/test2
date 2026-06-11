import type { Metadata } from "next";
import BuReviewCounts from "@/components/pages/BuReviewCounts";

export const metadata: Metadata = {
  title: "BU Review Counts | District Behavioral Health",
  description: "Gratitude Lodge LB - Chatwin (4-5 Star Reviews) LB - Chatwin (1-3 Star Reviews) LB - Belmont (4-5 Star Reviews) LB - Belmont (4-5 Star Reviews) NP - Redlands",
  robots: "follow, noindex",
};

export default function Page() {
  return <BuReviewCounts />;
}
