"use client";
import { Form, Table } from "antd";
import React from "react";
import { useAntdTable } from "ahooks";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import getDataTable from "./GetDataTable";

interface Props {
  columns: any[];
  props: any;
  rowSelection?: RowSelectionType;
  onEdit?: boolean;
  onDelete?: any;
  rowKey?: string;
  apiUrl: string;
}
interface Result {
  total: number;
  list: any[];
}
interface Params {
  current: number;
  pageSize: number;
}
interface RowSelectionType {
  type?: "checkbox" | "radio";
  onChange?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
  selectedRowKeys?: React.Key[];
}

export default ({
  columns,
  props,
  rowSelection,
  onEdit,
  onDelete,
  rowKey,
  apiUrl,
}: Props) => {
  const [form] = Form.useForm();
  const getData = async (
    { current, pageSize }: Params,
    formData: { name: string; email: string; gender: string }
  ): Promise<Result> => {
    return getDataTable(apiUrl, { current, pageSize }, formData);
  };
  const { tableProps } = useAntdTable(getData, {
    form,
    defaultParams: [
      { current: 1, pageSize: 2 },
      { name: "hello", email: "abc@gmail.com", gender: "female" },
    ],
    defaultType: "advance",
  });
  const router = useRouter();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    tableProps.onChange?.(pagination, filters, sorter);
    if (pagination && pagination.current) {
      const params = new URLSearchParams(pagination);
      replace(`${pathname}?${params.toString()}`);
      params.set("page", pagination.current);
    }
  };

  const initialColumns = Array.isArray(columns) ? columns : [];

  let updatedColumns = [...initialColumns];
  if (onDelete) {
    updatedColumns.push({
      dataIndex: "delete",
      fixed: "right",
      render: (_: any, record: any) => (
        <DeleteOutlined
          style={{ fontSize: "32px", color: "red" }}
          onClick={() => onDelete(record[rowKey!])}
        />
      ),
    });
  }

  if (onEdit) {
    updatedColumns.push({
      dataIndex: "edit",
      fixed: "right",
      render: (_: any, record: any) => (
        <a onClick={() => router.push(pathname!.concat(`/${record[rowKey!]}`))}>
          <EditOutlined style={{ fontSize: "32px" }} />
        </a>
      ),
    });
  }

  return (
    <Table
      columns={updatedColumns}
      rowSelection={rowSelection ? { ...rowSelection } : undefined}
      rowKey={rowKey}
      style={{ overflow: "auto" }}
      {...tableProps}
      onChange={onChange}
    />
  );
};
