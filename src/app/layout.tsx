import type { Metadata } from "next";
import "./globals.css";
import "./vector.css";

export const metadata: Metadata = {
  title: "Wikipedia prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
