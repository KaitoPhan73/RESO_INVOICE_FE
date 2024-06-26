"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { formatDate } from "@/utils/formater";
import { Tag } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function OrganizationsInvoicePage({ props, data }: Props) {
  const columns: CustomColumnType<TInvoice>[] = [
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (value: string) => formatDate(value),
      filter: {
        type: "date",
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
      filter: {
        type: "text",
        placeholder: "Nhập phương thức thanh toán",
      },
    },
    {
      title: "Mã hóa đơn",
      dataIndex: "invoiceCode",
      key: "invoiceCode",
    },
    {
      title: "Mã hóa đơn gốc",
      dataIndex: "lookupCode",
      key: "lookupCode",
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
