import userApi from "@/app/actions/users";
import CustomTable from "@/components/FeTable/CustomTable";
import { TUserBase } from "@/types/User";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
}
export default function UserPage({ props }: Props) {
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

  return (
    <CustomTable
      onDelete
      onEdit
      columns={columns}
      props={props}
      rowKey="id"
      // dataSource={arr}
      getData={userApi.getUsers}
    />
  );
}
