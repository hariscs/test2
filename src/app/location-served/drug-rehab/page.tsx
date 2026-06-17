import "./page.css";
import type { Metadata } from "next";
import LocationServedDrugRehab from "@/components/pages/LocationServedDrugRehab";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData("drug-rehab");
  return {
    title: data?.seo.title || "Tennessee Drug Rehab (Substance Abuse Treatment & Intervention) | District Behavioral Health",
    description: data?.seo.description || "10+ years 14000+ Patients Treated / 50+ Licenses & Accreditations / 4.85 ⭐ Rating (750+) / All Tennessee Drug Rehab Patients Welcome",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const data = await fetchPageData("drug-rehab");
  return <LocationServedDrugRehab {...(data?.fields ?? {})} />;
}
