import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./context/cartContext";
import { ToastProvider } from "./context/toastContext";
import { ModalProvider } from "./context/modalContext";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from 'nextjs-toploader';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UnifyStore | Buy Quality Shoes & Bags Online in Nigeria",
  description: "UnifyStore is Nigeria's leading online shop for premium footwear and designer bags. Discover trendy sneakers, elegant heels, and luxury handbags with fast nationwide delivery.",
  keywords: "shoes, bags, sneakers, handbags, online shopping Nigeria, UnifyStore, fashion, footwear",
  // viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

// 2. Add this new export for the viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextTopLoader 
          color="#1fa50d" // This is your emerald-800 hex code
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false} // Keeping it "clean" and "minimal"
          easing="ease"
          speed={200}
          shadow="0 0 10px #065f46,0 0 5px #065f46"
        />
        <ToastProvider>
          <CartProvider>
            <ModalProvider>{children}</ModalProvider>
          </CartProvider>
        </ToastProvider>
        <Analytics />
      </body>
    </html>
  );
}
