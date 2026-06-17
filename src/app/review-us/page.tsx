import "./page.css";
import type { Metadata } from "next";
import ReviewUs from "@/components/pages/ReviewUs";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData("review-us");
  return {
    title: data?.seo.title || "Inpatient Mental Health Finder - Port Hueneme Call Center - Google Maps",
    description: data?.seo.description || "",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const data = await fetchPageData("review-us");
  return <ReviewUs {...(data?.fields ?? {})} />;
}
