import React from "react";

export default function InvoiceLayout({
  children,
}: // report,
{
  children: React.ReactNode;
  // report: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* <div className="col-span-2 md:col-span-2 p-4">{report}</div> */}
      <div className="col-span-1 md:col-span-1 p-4">{children}</div>
    </div>
  );
}
