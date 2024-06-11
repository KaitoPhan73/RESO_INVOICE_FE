"use client";

import TableRender from "@/components/FeTable/TableRender";
import { RoleEnum } from "@/enums/role";
import { TOrganizationAccounts } from "@/schemaValidations/organizationaccounts.schema";
import { TableColumnsType, Tag } from "antd";
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
