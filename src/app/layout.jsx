import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./context/cartContext";
import { ToastProvider } from "./context/toastContext";
import { ModalProvider } from "./context/modalContext";
import { Analytics } from "@vercel/analytics/react";

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
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
