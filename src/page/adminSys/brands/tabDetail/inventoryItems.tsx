"use client";
import TableRender from "@/components/FeTable/TableRender";
import React from "react";
import { invoiceColumns } from "./configColunms";
type Props = {
  props: any;
  data: any;
};
export default function InventoryItemsPage({ props, data }: Props) {
  return <TableRender columns={invoiceColumns} propsUrl={props}
  onDelete={() => {}}
  data={data} />;
}
