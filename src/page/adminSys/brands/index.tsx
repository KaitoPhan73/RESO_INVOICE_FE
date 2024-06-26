"use client";
import TableRender from "@/components/FeTable/TableRender";
import { TBrandBody } from "@/schemaValidations/brand.schema";
import { CustomColumnType } from "@/types/TablePropsCustom";
import { TableColumnsType, TableProps } from "antd";
import { Tag } from "antd";
import React from "react";
interface Props {
  props: any;
  data: any;
}

export default function BrandPage({ props, data }: Props) {
  const columns: CustomColumnType<TBrandBody>[] = [
    {
      title: "id",
      dataIndex: "brandId",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "MST",
      dataIndex: "taxCode",
      key: "taxcode",
    },
    {
      title: "Mô tả",
      dataIndex: "descriptions",
      key: "descriptions",
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
  ];

  return (
    <TableRender
      columns={columns}
      data={data}
      propsUrl={props}
      onDelete={() => { }}
      onEdit
      onCreate
    />
  );
}
