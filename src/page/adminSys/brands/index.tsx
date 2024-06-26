"use client";
import TableRender, { TRowSelection } from "@/components/FeTable/TableRender";
import { TBrandBase } from "@/types/Brand";
import { TableColumnsType, TableProps } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}

export default function BrandPage({ props, data }: Props) {
  const columns: TableColumnsType<TBrandBase> = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "Mã",
      dataIndex: "code",
    },
    {
      title: "MST",
      dataIndex: "taxcode",
    },
    {
      title: "Mô tả",
      dataIndex: "descriptions",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
  ];

  return (
    <TableRender
      columns={columns}
      data={data}
      propsUrl={props}
      onDelete
      onEdit
      onCreate
      // rowSelection={rowSelection}
    />
  );
}
