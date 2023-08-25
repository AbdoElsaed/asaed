import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Abdulrhman Elsaed",
  description: "Abdulrhman Elsaed's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
