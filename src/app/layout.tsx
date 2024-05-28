import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import SnackbarProviders from "@/redux/SnackBar";
import AppProvider from "@/redux/AppProvider";
import { AuthProvider } from "@/context/userContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnackbarProviders>
          <AppProvider>
            <AuthProvider>
              <AntdRegistry>{children}</AntdRegistry>
            </AuthProvider>
          </AppProvider>
        </SnackbarProviders>
      </body>
    </html>
  );
}
