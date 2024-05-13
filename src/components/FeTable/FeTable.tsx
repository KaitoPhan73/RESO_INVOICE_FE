"use client";
import { Table } from "antd";
import React, { use, useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  columns: any[];
  rowSelection?: RowSelectionType;
  onEdit?: boolean;
  onDelete?: any;
  data: any[];
  rowKey?: string;
  searchParams: any;
  meta: Meta;
}

interface Meta {
  current: number;
  pageSize: number;
  total: number;
}

interface RowSelectionType {
  type?: "checkbox" | "radio";
  onChange?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
  selectedRowKeys?: React.Key[];
}
const FeTable = ({
  columns,
  rowSelection,
  onEdit,
  onDelete,
  data,
  rowKey,
  searchParams,
  meta,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    if (pagination && pagination.current) {
      const params = new URLSearchParams(searchParams);
      params.set("page", pagination.current);
      replace(`${pathname}?${params.toString()}`);
      setIsFetching(true);
    }
  };
  useEffect(() => {
    if (data) {
      setIsFetching(false);
    }
  }, [data]);

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
  if (onEdit) {
    updatedColumns = [
      ...updatedColumns,
      {
        dataIndex: "edit",
        fixed: "right",
        render: (_: any, record: any) => (
          <a
            onClick={() => router.push(pathname!.concat(`/${record[rowKey!]}`))}
          >
            <EditOutlined style={{ fontSize: "32px" }} />,
          </a>
        ),
      },
    ];
  }
  return (
    <Table
      loading={isFetching}
      rowSelection={rowSelection ? { ...rowSelection } : undefined}
      rowKey={rowKey}
      bordered
      dataSource={data}
      columns={updatedColumns}
      onChange={onChange}
      pagination={{
        ...meta,
        showTotal: (total, range) => {
          return (
            <div>
              {" "}
              {range[0]}-{range[1]} trên {total} rows
            </div>
          );
        },
      }}
    />
  );
};
export default FeTable;
