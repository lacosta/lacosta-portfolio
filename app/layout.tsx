// @packages
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";

// @app
import "./styles/global.scss";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "LACOSTA — Frontend Developer",
  description:
    "Frontend Developer focused on React, TypeScript and production frontend systems.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#f7f6f2",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${playfair.variable}`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
};

export default RootLayout;
