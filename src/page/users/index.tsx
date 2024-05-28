import TableRender from "@/components/FeTable/TableRender";
import { TUserBase } from "@/types/User";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function UserPage({ props, data }: Props) {
  const columns: TableColumnsType<TUserBase> = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "avatar",
      dataIndex: "avatar",
    },
    {
      title: "role",
      dataIndex: "role",
    },
  ];
  return <TableRender columns={columns} data={data} />;
}
