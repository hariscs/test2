import type { Metadata } from "next";
import CroVariation1 from "@/components/pages/CroVariation1";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData("cro-variation-1");
  return {
    title: data?.seo.title || "| District Behavioral Health",
    description: data?.seo.description || "",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const data = await fetchPageData("cro-variation-1");
  return <CroVariation1 {...(data?.fields ?? {})} />;
}
