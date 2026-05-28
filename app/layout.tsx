import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Deepala Nithish — Software Engineer Intern at Flipkart",
  description:
    "Portfolio of Deepala Nithish: IIIT Lucknow IT undergrad, Software Engineer Intern at Flipkart, full-stack developer, and competitive programmer.",
  metadataBase: new URL("https://nithish.dev"),
  openGraph: {
    title: "Deepala Nithish — Portfolio",
    description:
      "Engineer and analyst crafting data-driven full-stack products. ML pipelines, dashboards, and scalable systems.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
