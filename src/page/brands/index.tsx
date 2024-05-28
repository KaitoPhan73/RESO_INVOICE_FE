import TableRender from "@/components/FeTable/TableRender";
import { TBrandBase } from "@/types/Brand";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function BrandPage({ props, data }: Props) {
  const columns: TableColumnsType<TBrandBase> = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "code",
      dataIndex: "code",
    },
    {
      title: "taxcode",
      dataIndex: "taxcode",
    },
    {
      title: "descriptions",
      dataIndex: "descriptions",
    },
    {
      title: "status",
      dataIndex: "status",
    },
  ];
  return <TableRender columns={columns} data={data} onDelete onEdit onCreate />;
}
