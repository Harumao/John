import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import BNav from "@/components/bas-nav";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "John",
  description: "ok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {/* <Nav /> */}
            <BNav />
            {children}
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
