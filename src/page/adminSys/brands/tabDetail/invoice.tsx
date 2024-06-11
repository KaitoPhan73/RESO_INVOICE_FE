"use client";
import TableRender from "@/components/FeTable/TableRender";
import React from "react";
import { invoiceColumns } from "./configColunms";
type Props = {
  data: any;
  props: any;
};
export default function InvoicePage({ data, props }: Props) {
  return <TableRender columns={invoiceColumns} propsUrl={props} data={data} />;
}
