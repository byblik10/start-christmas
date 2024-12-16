import type { Metadata } from "next";
import { Geist, Geist_Mono, Golos_Text, Sarina, Modak, Coiny } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

// Загрузка шрифтов
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const golos = Golos_Text({
  variable: "--font-golos", // Добавляем переменную для шрифта Golos
  subsets: ['latin'],
  weight: ['400', '700'],
});

const sarina = Sarina({
  variable: "--font-sarina", // Добавляем переменную для шрифта Sarina
  subsets: ['latin'],
  weight: ['400'], // Sarina доступен только в одном весе (400)
});

const modak = Modak({
  variable: "--font-modak", // Добавляем переменную для шрифта Modak
  subsets: ['latin'],
  weight: ['400'], // Modak доступен только в одном весе (400)
});

// Добавляем шрифт Coiny
const coiny = Coiny({
  variable: "--font-coiny", // Добавляем переменную для шрифта Coiny
  subsets: ['latin'],
  weight: ['400'], // Coiny доступен только в одном весе (400)
});

export const metadata: Metadata = {
  title: "Christmas BTC",
  description: "The New Year's miracle is coming soon!",
  icons: {
    icon: "/favicon.png"
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