"use client";
import TableRender from "@/components/FeTable/TableRender";
import React from "react";
import { userColumns } from "./configColunms";
type Props = {
  data: any;
};
export default function UsersPage({ data }: Props) {
  return <TableRender columns={userColumns} data={data} onEdit />;
}
