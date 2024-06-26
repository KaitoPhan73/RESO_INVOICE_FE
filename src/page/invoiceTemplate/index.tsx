import TableRender from "@/components/FeTable/TableRender";
import { TInvoiceTemplateBase } from "@/types/InvoiceTemplate";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function InvoiceTemplatePage({ props, data }: Props) {
  const columns: CustomColumnType<TInvoiceTemplateBase>[] = [
    {
      title: "Organization Name",
      dataIndex: "organizationName",
      key: "organizationName",
    },
    {
      title: "Template Name",
      dataIndex: "templateName",
      key: "templateName",
    },
    {
      title: "Template Type",
      dataIndex: "templateType",
      key: "templateType",
    },
    {
      title: "Invoice Series",
      dataIndex: "invSeries",
      key: "invSeries",
    },
    {
      title: "Invoice Type",
      dataIndex: "invoiceType",
      key: "invoiceType",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return <TableRender columns={columns} data={data} propsUrl={props} onDelete={() => {}}
  onEdit onCreate />;
}
