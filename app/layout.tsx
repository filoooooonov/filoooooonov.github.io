import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { ReactLenis } from "@/components/utils/lenis";

import { cn } from "@/lib/utils";

// const fontSans = Onest({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata: Metadata = {
  title: "Aleksei Filonov",
  description:
    "I focus on creating and upgrading websites for businesses to help them acquire more clients and boost their online presence.",
  keywords: [
    "web development",
    "client acquisition",
    "online presence",
    "data science",
    "Aalto University",
    "developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WG3RFFPKQ7"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'personalization_storage': 'denied',
                  'functionality_storage': 'granted',
                  'security_storage': 'granted',
                });

            gtag('config', 'G-WG3RFFPKQ7');
            `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.className
        )}
      >
        <ReactLenis root>{children}</ReactLenis>
        <Analytics />
      </body>
    </html>
  );
}
