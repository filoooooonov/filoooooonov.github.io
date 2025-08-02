import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { ReactLenis } from "@/components/utils/lenis";

import { cn } from "@/lib/utils";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// const fontSans = Onest({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata: Metadata = {
  title: "Website Development · Aleksei Filonov",
  description: "Professional website development and design in Finland.",
  keywords: [
    "website design agency Finland",
    "verkkosivujen suunnittelu",
    "verkkosivuston kehitys",
    "hakukoneoptimointi",
    "website design",
    "website development",
    "ui design Finland",
    "web development Finland",
  ],
  openGraph: {
    title: "Website Development · Aleksei Filonov",
    description: "Professional website development and design in Finland.",
    url: "https://alekseifilonov.com",
    siteName: "Aleksei Filonov",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aleksei Filonov - Website Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development · Aleksei Filonov",
    description: "Professional website development and design in Finland.",
    images: ["/opengraph-image.png"],
  },
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
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto border-x border-stone-200",
          GeistSans.className
        )}
      >
        <ReactLenis root>
          <Header />
          {children}
          <Footer />
        </ReactLenis>
        <Analytics />
      </body>
    </html>
  );
}
