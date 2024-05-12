import React from "react";
import ServerTable from "@/components/FeTable/ServerTable";
import { TableColumnsType, TableProps } from "antd";
import { TablePropsCustom } from "@/types/TablePropsCustom";
// import TestingS from "@/app/Testing";
interface UserData {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

const User = async (props: any) => {
  const apiURL =
    "https://660bbdb3ccda4cbc75dd950a.mockapi.io/api/student/users";
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
  console.log("ddsdsd", props);
  return (
    <ServerTable
      onDelete
      onEdit
      apiURL={apiURL}
      columns={columns}
      props={props}
      rowKey="id"
    />
  );
};
export default User;
