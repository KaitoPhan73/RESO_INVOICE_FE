"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TOrganization } from "@/schemaValidations/organization.schema";
import { TPartnersBase } from "@/types/Partner";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType, Tag } from "antd";
import React from "react";

interface Props {
  props: any;
  data: any;
}

export default function PartnersInBrandPage({ props, data }: Props) {
  console.log("dataaaa>:", data);
  const columns: CustomColumnType<TPartnersBase>[] = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "API Url",
      dataIndex: "apiUrl",
      key: "apiUrl",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (value: number) =>
        value === 0 ? (
          <Tag color="geekblue" key={value}>
            Không hoạt động
          </Tag>
        ) : (
          <Tag color="green" key={value}>
            Hoạt động
          </Tag>
        ),
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
  ];

  return <TableRender columns={columns} propsUrl={props} data={data} />;
}
