import TableRender from "@/components/FeTable/TableRender";
import { TInvoice } from "@/types/Invoice";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function InvoicePage({ props, data }: Props) {
  const columns: CustomColumnType<TInvoice>[] = [
    {
      title: "Mã",
      dataIndex: "invoiceCode",
      key: "invoiceCode",
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Mã tiền tệ",
      dataIndex: "currencyCode",
      key: "currencyCode",
    },
    {
      title: "Tỉ giá",
      dataIndex: "exchangeRate",
      key: "exchangeRate",
    },
    {
      title: "Tỉ lệ chiết khấu",
      dataIndex: "discountRate",
      key: "discountRate",
    },
    {
      title: "Tỉ lệ VAT",
      dataIndex: "vatrate",
      key: "vatrate",
    },
    {
      title: "Tổng giá trị bán hàng",
      dataIndex: "totalSaleAmount",
      key: "totalSaleAmount",
    },
    {
      title: "Tổng giá trị chiết khấu",
      dataIndex: "totalDiscountAmount",
      key: "totalDiscountAmount",
    },
    {
      title: "Tổng giá trị không bao gồm VAT",
      dataIndex: "totalAmountWithoutVat",
      key: "totalAmountWithoutVat",
    },
    {
      title: "Tổng giá trị VAT",
      dataIndex: "totalVatamount",
      key: "totalVatamount",
    },
    {
      title: "Tổng giá trị",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
  ];
  return <TableRender columns={columns} data={data} propsUrl={props}
  onDelete={() => {}} onEdit onCreate />;
}
