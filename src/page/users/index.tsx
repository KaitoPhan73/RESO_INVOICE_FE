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
  ];

  // const arr = [
  //   {
  //     id: "1",
  //     name: "John Doe",
  //     avatar: "https://example.com/avatar1.png",
  //     role: "admin",
  //   },
  //   {
  //     id: "2",
  //     name: "Jane Smith",
  //     avatar: "https://example.com/avatar2.png",
  //     role: "user",
  //   },
  //   {
  //     id: "3",
  //     name: "Alice Johnson",
  //     avatar: "https://example.com/avatar3.png",
  //     role: "moderator",
  //   },
  //   {
  //     id: "4",
  //     name: "Bob Brown",
  //     avatar: "https://example.com/avatar4.png",
  //     role: "user",
  //   },
  //   {
  //     id: "5",
  //     name: "Emily Davis",
  //     avatar: "https://example.com/avatar5.png",
  //     role: "user",
  //   },
  // ];
  // console.log("getData", getUsers);
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
