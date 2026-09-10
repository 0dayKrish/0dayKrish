import type { Metadata, Viewport } from "next";
import { Space_Mono, Geist } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f4f3ef",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Krish Sharma — Cybersecurity Researcher & Community Builder | 0daykrish",
  description:
    "Official portfolio of Krish Sharma (0daykrish) — Cybersecurity Researcher, Penetration Tester, and Founder of BSides Vadodara. Specializing in offensive security, web application security, API security, and AI/LLM security.",
  keywords: [
    "Krish Sharma",
    "0daykrish",
    "Cybersecurity Researcher",
    "Penetration Tester",
    "AI Security",
    "Offensive Security",
    "BSides Vadodara",
    "Web Application Security",
    "API Security",
    "Vulnerability Research",
    "Vadodara",
    "Gujarat",
    "India",
  ],
  authors: [{ name: "Krish Sharma", url: "https://github.com/0daykrish" }],
  creator: "Krish Sharma (0daykrish)",
  publisher: "Krish Sharma",
  metadataBase: new URL("https://0daykrish.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Krish Sharma — Cybersecurity Researcher & Community Builder | 0daykrish",
    description:
      "Offensive security, penetration testing, AI security, vulnerability research, and founder of BSides Vadodara.",
    url: "https://0daykrish.com",
    siteName: "Krish Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krish Sharma — Cybersecurity Researcher & Community Builder | 0daykrish",
    description:
      "Cybersecurity Researcher, Penetration Tester, and Founder of BSides Vadodara. Offensive security, web/API security & AI defense.",
    creator: "@0daykrish",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${geist.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#f4f3ef] text-[#0a0a0a] selection:bg-[#0a0a0a] selection:text-[#059669]">
        {children}
      </body>
    </html>
  );
}
