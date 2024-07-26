"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { TStore } from "@/schemaValidations/store.schema";
import { TStoresBase } from "@/types/Strore";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { Tag } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function OrganizationsStorePage({ props, data }: Props) {
  const columns: CustomColumnType<TStoresBase>[] = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên ngắn",
      dataIndex: "shortName",
      key: "shortName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Điện Thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Mã",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value: number) =>
        value === 0 ? (
          <Tag color="geekblue" key={value}>
            Chờ xử lý
          </Tag>
        ) : (
          <Tag color="green" key={value}>
            Hoàn thành
          </Tag>
        ),
    },

  ];

  return (
    <TableRender
      columns={columns}
      propsUrl={props}
      data={data}
      onDelete={() => {}}
      onEdit
      // onCreate
    />
  );
}
