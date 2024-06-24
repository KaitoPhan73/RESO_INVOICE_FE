import React from "react";

export default function InvoiceDetailLayout({
  children,
  partnerInvoiceReport,
}: {
  children: React.ReactNode;
  partnerInvoiceReport: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        className="col-span-2 md:col-span-2 p-4 md:pb-0 mb-8"
        style={{ marginBottom: "1rem" }}
      >
        {partnerInvoiceReport}
      </div>
      <div className="col-span-1 md:col-span-1 p-4 md:pt-0">{children}</div>
    </div>
  );
}
