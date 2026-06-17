import "./page.css";
import type { Metadata } from "next";
import GalleryViewFacilitiesDev from "@/components/pages/GalleryViewFacilitiesDev";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData("gallery-view-facilities-dev");
  return {
    title: data?.seo.title || "| District Behavioral Health",
    description: data?.seo.description || "Explore our locations with services and amenities tailored specifically for you. Call now to get treatment at your preferred facility location.",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const data = await fetchPageData("gallery-view-facilities-dev");
  return <GalleryViewFacilitiesDev {...(data?.fields ?? {})} />;
}
