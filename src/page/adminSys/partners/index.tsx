"use client"

import TableRender from "@/components/FeTable/TableRender";
import { TPartnersBase } from "@/types/Partner";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType } from "antd";
import { Tag } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function PartnersPage({ props, data }: Props) {
  const columns: CustomColumnType<TPartnersBase>[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "API URL",
      dataIndex: "apiUrl",
      key: "apiUrl",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Environment",
      dataIndex: "environment",
      key: "environment",
      render: (value: number) =>
        value === 0 ? (
          <Tag color="geekblue" key={value}>
            Development
          </Tag>
        ) : (
          <Tag color="green" key={value}>
            Production
          </Tag>
        ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: number) =>
        value === 1 ? (
          <Tag color="geekblue" key={value}>
            Inactive
          </Tag>
        ) : (
          <Tag color="green" key={value}>
            Active
          </Tag>
        ),
    },
    {
      title: "Schema Config",
      dataIndex: "schemaConfig",
      key: "schemaConfig",
    },
  ]


  return (
    <TableRender
      propsUrl={props}
      columns={columns}
      data={data}
      onDelete={() => {}}
      onEdit
      onCreate={() => {}}
      />
  );
}
