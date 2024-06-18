import TableRender from "@/components/FeTable/TableRender";
import { TPartnersBase } from "@/types/Partner";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function PartnersPage({ props, data }: Props) {
  const columns: TableColumnsType<TPartnersBase> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "API URL",
      dataIndex: "apiUrl",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Environment",
      dataIndex: "environment",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Schema Config",
      dataIndex: "schemaConfig",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
    },
    {
      title: "Code",
      dataIndex: "code",
    },
  ]


  return (
    <TableRender
      propsUrl={props}
      columns={columns}
      data={data}
      onDelete
      onEdit
      onCreate
    />
  );
}
