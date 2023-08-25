import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdulrhman Elsaed",
  description: "Abdulrhman Elsaed's Portfolio",
  colorScheme: "dark",
  authors: [{ name: "Abdulrhman Elsaed", url: "https://asaed.me" }],
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#000" },
  applicationName: "Abdulrhman Elsaed's Portfolio & Blog",
  creator: "Abdulrhman Elsaed",
  viewport: { width: "device-width", initialScale: 1 },
  abstract: "Personal Portfolio & Blog",
  keywords: "portfolio, resume, blog, asaed",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.main}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
