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
const orbitron = localFont({ src: "./fonts/orbitron-bold.ttf", variable: "--font-orbitron", display: "swap" });

export const metadata: Metadata = {
  title: "AJ Foundation | Dignity. Access. A pathway forward.",
  description: "AJ Foundation is being established to support people affected by incarceration through connected pathways in access to justice, rehabilitation and capability development, and reintegration.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${parkinsans.variable} ${orbitron.variable}`}><body><SiteMotion /><Header /><main>{children}</main><Footer /></body></html>;
}
