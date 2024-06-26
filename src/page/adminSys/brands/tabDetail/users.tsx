"use client";
import TableRender from "@/components/FeTable/TableRender";
import React from "react";
import { userColumns } from "./configColunms";
type Props = {
  props: any;
  data: any;
};
export default function UsersPage({props, data }: Props) {
  return <TableRender columns={userColumns} propsUrl={props}
  data={data} onDelete={() => {}}
  onEdit />;
}
