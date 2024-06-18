"use client";

import TableRender from "@/components/FeTable/TableRender";
import { RoleEnum } from "@/enums/role";
import { TBrandAccounts } from "@/schemaValidations/brand-accounts.schema";
import { TableColumnsType, Tag } from "antd";
import React from "react";

interface Props {
  props: any;
  data: any; 
}

export default function BrandAccountPage({ props, data }: Props) {
  console.log("data:", data);

  const columns: TableColumnsType<TBrandAccounts> = [
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
      render: (value: number) => {
        const roles = {
          1: "Admin",
          2: "User",
          3: "Guest",
        };
        return RoleEnum[value] || "Unknown";
      },
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

  return <TableRender columns={columns} propsUrl={props} data={data} onDelete onEdit onCreate />;
}
