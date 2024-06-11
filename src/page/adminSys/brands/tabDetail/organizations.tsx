"use client";
import TableRender from "@/components/FeTable/TableRender";
import React from "react";
import { organizationColumns } from "./configColunms";
type Props = {
  data: any;
};
export default function OrganizationsPage({ data }: Props) {
  return <TableRender columns={organizationColumns} data={data} onEdit />;
}
