"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { DatePicker, TableColumnsType, Tag } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function OrganizationsInvoicePage({ props, data }: Props) {
  const columns: TableColumnsType<TInvoice> = [
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (value: string) => new Date(value).toLocaleString(),
      filterDropdown: "date",
    },
    {
      title: "Ngày chỉnh sửa",
      dataIndex: "updatedDate",
      key: "updatedDate",
      render: (value: string) => new Date(value).toLocaleString(),
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
      dataIndex: "exchangeRate",
      key: "exchangeRate",
    },
    {
      title: "Tỉ lệ giảm giá",
      dataIndex: "discountRate",
      key: "discountRate",
    },
    {
      title: "Tỉ lệ VAT",
      dataIndex: "vatrate",
      key: "vatrate",
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
      dataIndex: "totalAmountWithoutVat",
      key: "totalAmountWithoutVat",
    },
    {
      title: "Tổng số tiền VAT",
      dataIndex: "totalVatamount",
      key: "totalVatamount",
    },
    {
      title: "Tổng số tiền",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Trạng thái thanh toán",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
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
      data={data}
      propsUrl={props}
      onDelete
      onEdit
      onCreate
    />
  );
}
