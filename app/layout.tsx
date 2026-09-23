import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AtmosphereBackground from "@/components/AtmosphereBackground";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qlue — AI Voice Mock Interviews",
  description:
    "AI-powered voice mock interviews that adapt to your resume. Voice-first, resume-aware, and free.",
  openGraph: {
    title: "Qlue — AI Voice Mock Interviews",
    description:
      "AI-powered voice mock interviews that adapt to your resume.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen bg-black font-sans text-white antialiased">
        <AtmosphereBackground />
        {children}
      </body>
    </html>
  );
}
