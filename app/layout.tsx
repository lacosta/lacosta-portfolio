// @packages
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Martian_Mono } from "next/font/google";

// @app
import "./styles/global.scss";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "lacosta.dev",
  description:
    "Frontend Developer focused on React, TypeScript and production frontend systems.",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#0b0c0e",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${martianMono.variable}`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
};

export default RootLayout;
