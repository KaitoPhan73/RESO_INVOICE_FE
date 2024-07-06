import TableRender from "@/components/FeTable/TableRender";
import { TOrganizationsBase } from "@/types/Organization";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function OrganizationsPage({ props, data }: Props) {
  const columns: CustomColumnType<TOrganizationsBase>[] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Representative",
      dataIndex: "representative",
      key: "representative",
    },
    {
      title: "Tax Code",
      dataIndex: "taxCode",
      key: "taxCode",
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
      key: "brandName",
    },
  ];

  return <TableRender columns={columns} data={data} propsUrl={props} />;
}
