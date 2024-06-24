import TableRender from "@/components/FeTable/TableRender";
import { TInvoiceTemplateBody } from "@/schemaValidations/invoiceTemplate.schema";
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
      title: "Organization Name",
      dataIndex: "organizationName",
    },
    {
      title: "Template Name",
      dataIndex: "templateName",
    },
    {
      title: "Template Type",
      dataIndex: "templateType",
    },
    {
      title: "Invoice Series",
      dataIndex: "invSeries",
    },
    {
      title: "Invoice Type",
      dataIndex: "invoiceType",
    },
    {
      title: "Status",
      dataIndex: "status",
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
