import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SnackbarProviders from "@/redux/SnackBar";
import AppProvider from "@/redux/AppProvider";
import { AuthProvider } from "@/context/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deer Coffee",
  description: "Deer Coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <AuthProvider>{children}</AuthProvider>
        </AppProvider>
      </body>
    </html>
  );
}
