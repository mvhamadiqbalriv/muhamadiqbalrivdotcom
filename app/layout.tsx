import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import ScrollToTopButton from "@/components/scroll-to-top-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M Iqbal Rivaldi - Software Engineer",
  description: "Personal website of M Iqbal Rivaldi, a software engineer based in Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="container py-4 px-4 md:px-16 lg:px-48">
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
            <Navbar />
            {children}
          </ThemeProvider>
          <Analytics />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
