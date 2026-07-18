import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteMotion } from "@/components/layout/SiteMotion";

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "./fonts/inter-regular.woff2", weight: "400" },
    { path: "./fonts/inter-medium.woff2", weight: "500" },
    { path: "./fonts/inter-bold.woff2", weight: "700" },
  ],
});
const parkinsans = localFont({ src: "./fonts/parkinsans.woff2", variable: "--font-parkinsans", display: "swap" });

export const metadata: Metadata = {
  title: "AJ Foundation | Skills for Rehabilitation. Readiness for Life.",
  description: "AJ Foundation supports rehabilitation through skills, employability training, and post-release readiness.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${parkinsans.variable}`}><body><SiteMotion /><Header /><main>{children}</main><Footer /></body></html>;
}
