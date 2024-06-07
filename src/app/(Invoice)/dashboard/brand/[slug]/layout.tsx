import React from "react";

export default function BrandLayout({
  children,
  brandOptions,
}: {
  children: React.ReactNode;
  brandOptions: React.ReactNode;
}) {
  return (
    <>
      {children}
      {brandOptions}
    </>
  );
}
