"use client";
import { Form, Input, Select, Table } from "antd";
import React from "react";
import { useAntdTable } from "ahooks";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
const { Option } = Select;
interface Props {
  columns: any[];
  props: any;
  rowSelection?: RowSelectionType;
  onEdit?: boolean;
  onDelete?: any;
  rowKey?: string;
  dataSource?: any[];
  getData?: (params?: any) => Promise<any>;
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

const CustomTable = ({
  columns,
  props,
  rowSelection,
  onEdit,
  onDelete,
  rowKey,
  dataSource,
  getData,
}: Props) => {
  const [form] = Form.useForm();
  const getDataTable = async (
    { current, pageSize }: Params,
    formData: Object
  ): Promise<Result> => {
    console.log("formData", formData);
    let params = {
      page: current,
      limit: pageSize,
    };
    if (formData) {
      Object.assign(params, formData);
    }

    if (dataSource) {
      // const paginatedData = dataSource.slice(
      //   (current - 1) * pageSize,
      //   current * pageSize
      // );
      return {
        total: dataSource.length,
        list: dataSource,
      };
    } else if (getData) {
      const data = await getData(params);
      return {
        total: 30,
        list: data.payload,
      };
    } else {
      throw new Error("Either dataSource or getData must be provided.");
    }
  };

  const { loading, tableProps, search, params } = useAntdTable(getDataTable, {
    form,
    defaultParams: [{ current: 1, pageSize: 5 }, { name: "a" }],
    defaultType: "advance",
  });
  console.log("tableProps", tableProps);
  const { type, changeType, submit, reset } = search;

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
    <>
      <div style={{ marginBottom: 16 }}>
        <Form
          form={form}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/* <Form.Item name="gender" initialValue="male">
            <Select style={{ width: 120, marginRight: 16 }} onChange={submit}>
              <Option value="">all</Option>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item> */}
          <Form.Item name="name">
            <Input.Search
              placeholder="enter name"
              style={{ width: 240 }}
              onSearch={submit}
            />
          </Form.Item>
        </Form>
      </div>
      <Table
        columns={updatedColumns}
        rowSelection={rowSelection ? { ...rowSelection } : undefined}
        rowKey={rowKey}
        style={{ overflow: "auto" }}
        {...tableProps}
        onChange={onChange}
      />
    </>
  );
};
export default CustomTable;
