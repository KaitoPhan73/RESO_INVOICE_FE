import FeTable from "@/components/FeTable/FeTable";
import data from "@iconify/icons-eva/file-fill";
import React from "react";
// interface Item {
//   id: string;
//   name: string;
//   avatar: string;
//   role: string;
// }

interface Result {
  total: number;
  list: any[];
}
interface Params {
  current: number;
  pageSize: number;
}

interface ServerTableProps {
  apiURL: string;
  columns: any[];
  props: any;
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

const ServerTable = async ({
  apiURL,
  columns,
  props,
  rowSelection,
  onEdit,
  onDelete,
  rowKey,
}: ServerTableProps) => {
  const getTableData = async (
    { current, pageSize }: Params,
    formData: Object
  ): Promise<Result> => {
    "use server";

    try {
      let query = `?page=${current}&limit=${pageSize}`;
      if (formData && Object.keys(formData).length > 0) {
        Object.entries(formData).forEach(([key, value]) => {
          if (value) {
            query += `&${key}=${value}`;
          }
        });
      }
      const url = `${apiURL}${query}`;
      const res = await fetch(url);
      const data: any[] = await res.json();
      return {
        total: data.length,
        list: data,
      };
    } catch (error) {
      console.error("Error fetching table data:", error);
      throw error;
    }
  };

  return (
    <FeTable
      rowSelection={rowSelection ? { ...rowSelection } : undefined}
      columns={columns}
      getTableData={getTableData}
      onEdit={(onEdit ??= false)}
      onDelete={(onDelete ??= false)}
      rowKey={(rowKey ??= "id")}
    />
  );
};
export default ServerTable;
