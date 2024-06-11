"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TInvoiceTemplateBody } from "@/schemaValidations/invoiceTemplate.schema";
import { TOrganizationsBase } from "@/types/Organization";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function OrganizationsInvoiceTemplatePage({
  props,
  data,
}: Props) {
  const columns: TableColumnsType<TInvoiceTemplateBody> = [
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Representative",
      dataIndex: "representative",
    },
    {
      title: "Tax Code",
      dataIndex: "taxCode",
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
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
