import userApi from "@/actions/users";
import CustomTable from "@/components/FeTable/CustomTable";
import TableRender from "@/components/FeTable/TableRender";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TUserBase } from "@/types/User";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function UserPage({ props, data }: Props) {
  const columns: CustomColumnType<TUserBase>[] = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
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
