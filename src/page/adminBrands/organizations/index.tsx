"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TOrganization } from "@/schemaValidations/organization.schema";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType, Tag } from "antd";
import React from "react";

interface Props {
  props: any;
  data: any;
}

export default function OrganizationsInBrandPage({ props, data }: Props) {
  console.log("dataaaa>:", data);
  const columns: CustomColumnType<TOrganization>[] = [
    {
      title: "Tên tổ chức",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Người đại diện",
      dataIndex: "representative",
      key: "representative",
    },
    {
      title: "Mã số thuế",
      dataIndex: "taxCode",
      key: "taxCode",
    },

    {
      title: "Tên thương hiệu",
      dataIndex: "brandName",
      key: "brandName",
    },
    {
      title: "Mã code",
      dataIndex: "code",
      key: "code",
    },
  ];

  return <TableRender columns={columns} propsUrl={props} data={data}       onDelete={() => {}}
  onEdit onCreate />;
}
