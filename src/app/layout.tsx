import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Newsreader replaces Lora — more editorial/journal feel, better for long-form
const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sun Zhelun | AI × Remote Sensing Researcher",
  description:
    "Personal website of Sun Zhelun (孙哲伦), Ph.D. candidate at Tsinghua University researching LLM-based multi-agent systems for remote sensing analysis.",
  keywords: [
    "Sun Zhelun",
    "孙哲伦",
    "Tsinghua University",
    "remote sensing",
    "LLM",
    "multi-agent",
    "AI",
    "geospatial",
  ],
  authors: [{ name: "Sun Zhelun" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
