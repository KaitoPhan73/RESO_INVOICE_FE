import TableRender from "@/components/FeTable/TableRender";
import { TStoresBase } from "@/types/Strore";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}
export default function StoresPage({ props, data }: Props) {
  const columns: CustomColumnType<TStoresBase>[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Short Name",
      dataIndex: "shortName",
      key: "shortName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return <TableRender columns={columns} data={data} propsUrl={props}
  onDelete={() => {}}
  onEdit onCreate />;
}
