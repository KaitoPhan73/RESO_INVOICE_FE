"use client";

import TableRender from "@/components/FeTable/TableRender";
import { RoleEnum } from "@/enums/role";
import React from "react";
import { organizationAccountsColumns } from "./configColunms";

interface Props {
  props: any;
  data: any;
}

export default function OrganizationAccountsPage({ props, data }: Props) {
  return (
    <TableRender
      columns={organizationAccountsColumns}
      propsUrl={props}
      data={data}
      // onDelete
      // onEdit
      // onCreate
    />
  );
}
