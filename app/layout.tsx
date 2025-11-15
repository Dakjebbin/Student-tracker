import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { Outfit } from "next/font/google";
import "./globals.css";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Just Health",
  description: "Students Health Tracker App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.variable} antialiased`}>
          <Toaster />
          <SignedIn>
            {children}
          </SignedIn>
          <SignedOut>
            <Home />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
