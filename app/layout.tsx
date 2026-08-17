import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { Nav } from "./Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kakao.ink"),
  title: {
    default: "kakao.ink | Design studio",
    template: "%s | kakao.ink",
  },
  description:
    "kakao.ink builds digital menus, websites, and social ad systems that help hospitality brands sell more with sharper design and stronger storytelling.",
  keywords: [
    "restaurant marketing",
    "digital menu",
    "restaurant website",
    "social ads for restaurants",
    "hospitality branding",
    "kakao ink",
  ],
  applicationName: "kakao.ink",
  authors: [{ name: "kakao.ink" }],
  creator: "kakao.ink",
  publisher: "kakao.ink",
  openGraph: {
    title: "kakao.ink | Design studio",
    description:
      "Digital menus, websites, and social ads designed to help hospitality brands grow demand and delight guests.",
    url: "https://kakao.ink",
    siteName: "kakao.ink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "kakao.ink | Design studio",
    description:
      "Digital menus, websites, and social ads designed to help hospitality brands grow demand and delight guests.",
    creator: "@kakaoink",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Nav />
        {children}

        <footer>
          <div className="wrap">
            <a className="mark" href="/">
              kakao<span>.</span>ink
            </a>
            <div>
              <a className="f" href="/menu">
                Digital menus
              </a>
              <a className="f" href="/websites">
                Websites
              </a>
              <a className="f" href="/ads">
                Social ads
              </a>
              <a className="f" href="/">
                Studio
              </a>
            </div>
            <small>
              Design studio · Tijuana, MX ·
              <a href="mailto:hello@kakao.ink"> hello@kakao.ink </a>
            </small>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
