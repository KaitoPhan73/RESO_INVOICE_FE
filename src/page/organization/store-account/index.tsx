"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { TStore } from "@/schemaValidations/store.schema";
import { TStoreAccountsBase } from "@/schemaValidations/storeaccounts.schema";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { Tag } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function StoreAccountsPage({ props, data }: Props) {
  console.log("dataaaaaS", data);
  const columns: CustomColumnType<TStoreAccountsBase>[] = [
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
    // {
    //   title: "Mật khẩu",
    //   dataIndex: "",
    //   key: "password",
    // },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Vai trò",
      dataIndex: "roleId",
      key: "roleId",
      render: (value: number) =>
        value === 0 ? (
          <Tag color="blue" key={value}>
            Admin
          </Tag>
        ) : (
          <Tag color="green" key={value}>
            User
          </Tag>
        ),
    },
    {
      title: "ID thương hiệu",
      dataIndex: "brandId",
      key: "brandId",
    },
    {
      title: "ID tổ chức",
      dataIndex: "organizationId",
      key: "organizationId",
    }
  ];

  return (
    <TableRender
      columns={columns}
      propsUrl={props}
      data={data}
      onDelete={() => {}}
      onEdit
      onCreate
    />
  );
}
