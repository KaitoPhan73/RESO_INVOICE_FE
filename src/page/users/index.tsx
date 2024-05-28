import { getUsers } from "@/app/actions/users";
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
      title: "username",
      dataIndex: "username",
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "role",
      dataIndex: "role",
    },
    {
      title: "status",
      dataIndex: "status",
    },
    {
      title: "storeCode",
      dataIndex: "storeCode",
    },
    {
      title: "brandCode",
      dataIndex: "brandCode",
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
      getData={getUsers}
    />
  );
}
