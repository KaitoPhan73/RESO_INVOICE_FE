"use client"
import OrganizationsApi from "@/actions/organizations";
import OrganizationsStorePage from "@/page/organization/store";
import InvoiceForm from "@/page/organization/template";
import { cookies } from "next/headers";
import React, { useState } from "react";

export default function Template(props: any) {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleClose = () => {
    // Logic to handle closing the form (e.g., setting state, navigation)
  };

  return (
    <>
      <InvoiceForm
        onClose={handleClose}
        setInvoices={setInvoices}
        selectedInvoice={selectedInvoice}
      />
    </>
  );
}
