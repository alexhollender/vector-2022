import * as Context from "@/lib/context";
import type { Metadata } from "next";
import * as Ui from "@/ui";
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
      <body>
        <div className="px-6 medium:px-[44px] large:px-[52px] max-w-[99.75rem] bg-background-base mx-auto min-h-screen">
          <Context.WikiProvider>{children}</Context.WikiProvider>
          <Ui.Footer />
        </div>
      </body>
    </html>
  );
}
