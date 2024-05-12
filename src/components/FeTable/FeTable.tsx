"use client";
import { Table } from "antd";
import React from "react";
import { useAntdTable } from "ahooks";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  columns: any[];
  getTableData: any;
  rowSelection?: RowSelectionType;
  onEdit?: boolean;
  onDelete?: any;
  rowKey?: string;
}

interface RowSelectionType {
  type?: "checkbox" | "radio";
  onChange?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
  selectedRowKeys?: React.Key[];
}
export default ({
  columns,
  getTableData,
  rowSelection,
  onEdit,
  onDelete,
  rowKey,
}: Props) => {
  const router = useRouter();
  const path = usePathname();
  const { tableProps } = useAntdTable(getTableData);
  let updatedColumns = [...columns];
  if (onDelete) {
    updatedColumns = [
      ...updatedColumns,
      {
        dataIndex: "delete",
        fixed: "right",
        render: () => (
          <DeleteOutlined style={{ fontSize: "32px", color: "red" }} />
        ),
      },
    ];
  }
  console.log("onEdit", onEdit);
  if (onEdit) {
    console.log("onEdit", "ccccc");
    updatedColumns = [
      ...updatedColumns,
      {
        dataIndex: "edit",
        fixed: "right",
        render: (_: any, record: any) => (
          <a onClick={() => router.push(path!.concat(`/${record[rowKey!]}`))}>
            <EditOutlined style={{ fontSize: "32px" }} />,
          </a>
        ),
      },
    ];
  } else {
    console.log("onEdit", "ddddd");
  }
  return (
    <Table
      rowSelection={rowSelection ? { ...rowSelection } : undefined}
      columns={updatedColumns}
      rowKey="name"
      style={{ overflow: "auto" }}
      {...tableProps}
    />
  );
};
