"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { formatDate, formatPriceVND } from "@/utils/formater";
import { Tag, Tooltip } from "antd";
import React from "react";
import { invoiceStatusOptions } from "./config";
interface Props {
  props: any;
  data: any;
}
export default function OrganizationsInvoicePage({ props, data }: Props) {
  const customInvoiceStatusOptions = [
    { value: "all", label: "Tất cả" },
    ...invoiceStatusOptions,
  ];
  const columns: CustomColumnType<TInvoice>[] = [
    {
      title: "Mã hóa đơn",
      dataIndex: "invoiceCode",
      key: "invoiceCode",
      ellipsis: {
        showTitle: false,
      },
      render: (value) => (
        <Tooltip placement="topLeft" title={value}>
          {value}
        </Tooltip>
      ),
    },

    {
      title: "Mã hóa đơn gốc",
      dataIndex: "lookupCode",
      key: "lookupCode",
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
        invoiceStatusOptions.map((item) => {
          if (item.value === value) {
            return (
              <Tag color="geekblue" key={item.value}>
                {item.label}
              </Tag>
            );
          }
        }),

      filter: {
        type: "select",
        placeholder: "Chọn trạng thái",
        options: customInvoiceStatusOptions,
      },
    },

    // {
    //   title: "Tỉ lệ quy đổi (VND)",
    //   dataIndex: "currencyExchangeRate",
    //   key: "currencyExchangeRate",
    //   render: (value: string) => formatPriceVND(value),
    // },
    {
      title: "Tổng số luợng bán (VND)",
      dataIndex: "totalSaleAmount",
      key: "totalSaleAmount",
      render: (value: string) => formatPriceVND(value),
    },
    {
      title: "Tổng số tiền giảm giá (VND)",
      dataIndex: "totalDiscountAmount",
      key: "totalDiscountAmount",
      render: (value: string) => formatPriceVND(value),
    },
    {
      title: "Tổng số tiền không bao gồm VAT (VND)",
      dataIndex: "totalAmountWithoutTax",
      key: "totalAmountWithoutTax",
      render: (value: string) => formatPriceVND(value),
    },
    {
      title: "Tổng số tiền (VND)",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (value: string) => formatPriceVND(value),
    },
  ];
  return (
    <TableRender
      columns={columns}
      data={data}
      propsUrl={props}
      // onDelete={() => {}}
      onEdit
    />
  );
}
