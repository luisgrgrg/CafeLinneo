import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '400'],
  variable: '--font-poppins',
  display: 'swap'
});
export const metadata: Metadata = {
  title: "Cafe Linneo",
  description: "Linneo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${philosopher.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
