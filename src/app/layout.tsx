import type { Metadata } from "next";
import { Geist, Geist_Mono, Golos_Text, Sarina, Modak, Coiny } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ['latin'],
  weight: ['400', '700'],
});

const sarina = Sarina({
  variable: "--font-sarina",
  subsets: ['latin'],
  weight: ['400'],
});

const modak = Modak({
  variable: "--font-modak",
  subsets: ['latin'],
  weight: ['400'],
});

const coiny = Coiny({
  variable: "--font-coiny",
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Christmas BTC",
  description: "The Christmas's miracle is coming soon!",
  icons: {
    icon: "/favicon-christmas-hat.png"
   },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${golos.variable} ${sarina.variable} ${modak.variable} ${coiny.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}