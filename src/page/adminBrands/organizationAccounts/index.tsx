"use client";

import TableRender from "@/components/FeTable/TableRender";
import { RoleEnum } from "@/enums/role";
import { TOrganizationAccountsResponse } from "@/schemaValidations/organizationaccounts.schema";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType, Tag } from "antd";
import React from "react";

interface Props {
  props: any;
  data: any;
}

export default function OrganizationAccountsPage({ props, data }: Props) {
  console.log("data:", data);

  const columns: CustomColumnType<TOrganizationAccountsResponse>[] = [
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (value: number) => (
        <Tag color={value === 0 ? 'volcano' : value === 1 ? 'geekblue' : 'green'} key={value}>
          {RoleEnum[value] || "Unknown"}
        </Tag>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value: number) =>
        value === 0 ? (
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
      title: "Mã tổ chức",
      dataIndex: "organizationCode",
      key: "organizationCode",
    },
    {
      title: "Mã thương hiệu",
      dataIndex: "brandCode",
      key: "brandCode",
    },
  ];

  return (
    <TableRender
      columns={columns}
      data={data}
      propsUrl={props}
      onDelete={() => {}}
      onEdit
      onCreate
    />
  );
}
