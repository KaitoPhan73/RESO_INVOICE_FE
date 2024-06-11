"use client";
import TableRender from "@/components/FeTable/TableRender";
import React from "react";
import { invoiceColumns } from "./configColunms";
type Props = {
  data: any;
};
export default function InvoicePage({ data }: Props) {
  return <TableRender columns={invoiceColumns} data={data} onEdit />;
}
