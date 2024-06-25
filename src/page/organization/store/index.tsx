"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { TStore } from "@/schemaValidations/store.schema";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { Tag } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function OrganizationsStorePage({ props, data }: Props) {
  const columns: CustomColumnType<TInvoice>[] = [
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (value: string) => new Date(value).toLocaleString(),
      filter: {
        type: "datetime",
        placeholder: "Chọn ngày tạo",
      },
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
    {
      title: "Phương thức thanh toán",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Tỉ lệ quy đổi",
      dataIndex: "currencyExchangeRate",
      key: "currencyExchangeRate",
    },
    {
      title: "Tổng số luợng bán",
      dataIndex: "totalSaleAmount",
      key: "totalSaleAmount",
    },
    {
      title: "Tổng số tiền giảm giá",
      dataIndex: "totalDiscountAmount",
      key: "totalDiscountAmount",
    },
    {
      title: "Tổng số tiền không bao gồm VAT",
      dataIndex: "totalAmountWithoutTax",
      key: "totalAmountWithoutTax",
    },
    {
      title: "Tổng số tiền",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Trạng thái thanh toán",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (value: number) =>
        value === 0 ? (
          <Tag color="volcano" key={value}>
            Chờ xử lí
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
      onDelete
      onEdit
      onCreate
    />
  );
}
