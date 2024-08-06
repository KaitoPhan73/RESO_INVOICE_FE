import SilderBar from "@/page/layout/App";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deer Coffee",
  description: "Deer Coffee",
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SilderBar>{children}</SilderBar>;
}
