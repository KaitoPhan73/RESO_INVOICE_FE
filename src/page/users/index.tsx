import CustomTable from "@/components/FeTable/CustomTable";
import { TableColumnsType } from "antd";
import React from "react";
interface UserData {
  id: string;
  name: string;
  avatar: string;
  role: string;
}
interface Props {
  props: any;
  res: any;
}
export default function UserPage({ props, res }: Props) {
  const columns: TableColumnsType<UserData> = [
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
  return (
    <CustomTable
      onDelete
      onEdit
      res={res}
      columns={columns}
      props={props}
      rowKey="id"
    />
  );
}
