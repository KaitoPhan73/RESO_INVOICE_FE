"use client";
import TableRender from "@/components/FeTable/TableRender";
import React from "react";
import { organizationColumns } from "./configColunms";
type Props = {
  props: any;
  data: any;
};
export default function OrganizationsPage({props, data }: Props) {
  return <TableRender columns={organizationColumns} data={data} propsUrl={props}
  onEdit />;
}
