import { TTableResponse } from "@/types/Table";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table, DatePicker } from "antd";
import type { ColumnType, ColumnGroupType } from "antd/es/table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface TRowSelection {
  type?: "checkbox" | "radio";
  onChange?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
  selectedRowKeys?: React.Key[];
}

interface IProps {
  data: TTableResponse<any>;
  columns: (ColumnType<any> | ColumnGroupType<any>)[];
  propsUrl?: any;
  rowKey?: string;
  onDelete?: any;
  onCreate?: any;
  onEdit?: any;
  rowSelection?: TRowSelection;
}

const TableRender = (props: IProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const {
    data,
    columns,
    rowKey = "id",
    onEdit,
    onDelete,
    propsUrl,
    rowSelection,
    onCreate,
  } = props;

  // Update pagination meta information
  const meta = {
    current: propsUrl.searchParams.page ? +propsUrl.searchParams.page : 1,
    pageSize: propsUrl.searchParams.size ? +propsUrl.searchParams.size : 10,
    total: data.total,
  };

  useEffect(() => {
    if (data) setIsFetching(false);
  }, [data]);

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    const currentParams = new URLSearchParams(searchParams);
    const newParams = new URLSearchParams();
    console.log("currentParams:", currentParams.toString());
    // Copy existing query params to newParams
    currentParams.forEach((value, key) => {
      newParams.set(key, value);
    });

    // Update page and size
    if (pagination && pagination.current) {
      newParams.set("page", pagination.current.toString());
    }

    Object.keys(filters).forEach((key) => {
      const filterValue = filters[key];
      if (filterValue) {
        if (Array.isArray(filterValue)) {
          newParams.set(key, filterValue.join(","));
        } else {
          newParams.set(key, filterValue.toString());
        }
      }
      // Remove page from URL if filterDropdown is "date"
      // const column = columns.find(
      //   (col) => (col as ColumnType<any>).dataIndex === key
      // );
      // if (column && column.filterDropdown === "date") {
      //   newParams.delete("page");
      // }
    });

    replace(`${pathname}?${newParams.toString()}`);
    setIsFetching(true);
  };

  // Extend columns to add actions (edit, delete)
  let updatedColumns = [...columns];

  // Add filterDropdown for columns where filterDropdown is "date"
  updatedColumns = updatedColumns.map((column) => {
    if (
      (column as ColumnType<any>).dataIndex &&
      column.filterDropdown === "date"
    ) {
      return {
        ...column,
        filterDropdown: (
          <DatePicker
            onChange={(date, dateString) => {
              const params = new URLSearchParams(searchParams);
              if (typeof dateString === "string" && dateString) {
                params.set((column as ColumnType<any>).dataIndex!, dateString);
              } else {
                params.delete((column as ColumnType<any>).dataIndex!);
              }
              params.delete("page");
              replace(`${pathname}?${params.toString()}`);
              setIsFetching(true);
            }}
          />
        ),
      };
    }
    return column;
  });

  // Add edit and delete columns if onDelete and onEdit are provided
  if (onDelete) {
    updatedColumns.push({
      dataIndex: "delete",
      fixed: "right",
      width: 50,
      render: (_: any, record: any) => (
        <DeleteOutlined
          style={{ fontSize: "24px", color: "red" }}
          onClick={() => onDelete(record[rowKey!])}
        />
      ),
    });
  }

  if (onEdit) {
    updatedColumns.push({
      dataIndex: "edit",
      fixed: "right",
      width: 50,
      render: (_: any, record: any) => (
        <a onClick={() => router.push(pathname!.concat(`/${record[rowKey!]}`))}>
          <EditOutlined style={{ fontSize: "24px" }} />
        </a>
      ),
    });
  }

  const renderHeader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Filters area */}
      <div>
        {updatedColumns.map((column: any) =>
          column.filterDropdown ? (
            <div key={column.key}>
              <span>{column.title}:</span>
              {column.filterDropdown}
            </div>
          ) : null
        )}
      </div>

      {/* Create button */}
      <Button
        icon={<PlusOutlined />}
        type="primary"
        onClick={() => router.push(pathname!.concat(`/create`))}
      >
        Thêm mới
      </Button>
    </div>
  );

  return (
    <Table
      title={onCreate ? renderHeader : undefined}
      rowSelection={rowSelection ? { ...rowSelection } : undefined}
      loading={isFetching}
      rowKey={rowKey}
      dataSource={data.items}
      columns={updatedColumns}
      onChange={onChange}
      scroll={{ x: 1500 }}
      pagination={{
        ...meta,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} trên ${total} kết quả`,
      }}
    />
  );
};

export default TableRender;
