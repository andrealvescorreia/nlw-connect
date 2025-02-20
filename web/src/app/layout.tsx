import type { Metadata } from "next";
import './globals.css'
import { Oxanium, Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: "devstage",
};

const oxanium = Oxanium({
  weight: ['500', '600'],// medium, semibold
  subsets: ['latin'],
  variable: '--fonte-oxanium'
})

const montserrat = Montserrat({
  weight: ['400', '600'],// regular, semibold
  subsets: ['latin'],
  variable: '--fonte-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
