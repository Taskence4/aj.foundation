import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import pages from "@/data/v3-pages.json";

const content = pages["initial-programme"];
export const metadata: Metadata = { title: `${content.eyebrow === "Policies" ? content.title : content.eyebrow} | AJ Foundation`, description: content.intro || content.title };
export default function Page() { return <ContentPage content={content} />; }
