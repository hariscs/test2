"use client";
import { useEffect, useRef } from "react";

const STYLESHEET_HREF = "https://cdn.trustindex.io/assets/widget-presetted-css/v2/80-light-background.css";

export function TrustIndexWidget({ widgetId }: { widgetId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const load = () => {
      if (el.querySelector("script")) return;
      if (!document.querySelector(`link[rel="stylesheet"][href="${STYLESHEET_HREF}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = STYLESHEET_HREF;
        document.head.appendChild(link);
      }
      const script = document.createElement("script");
      script.src = `https://cdn.trustindex.io/loader.js?${widgetId}`;
      script.async = true;
      script.defer = true;
      el.appendChild(script);
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        load();
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, [widgetId]);
  return <div ref={ref} />;
}