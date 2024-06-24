"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TStore } from "@/schemaValidations/store.schema";
import { TableColumnsType, Tag } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function OrganizationsStorePage({ props, data }: Props) {
  const columns: TableColumnsType<TStore> = [
    {
      title: "Tên cửa hàng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên ngắn",
      dataIndex: "shortName",
      key: "shortName",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value: number) =>
        value === 0 ? (
          <Tag color="default" key={value}>
            Không hoạt động
          </Tag>
        ) : (
          <Tag color="green" key={value}>
            Hoạt động
          </Tag>
        ),
    },
    {
      title: "So điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Mã cửa hàng",
      dataIndex: "code",
      key: "code",
    },
  ];

  return (
    <TableRender
      columns={columns}
      propsUrl={props}
      data={data}
      onDelete
      onEdit
      onCreate
    />
  );
}
