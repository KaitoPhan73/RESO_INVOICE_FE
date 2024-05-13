import FeTable from "@/components/FeTable/FeTable";
import React, { use } from "react";

interface Props {
  columns: any[];
  props: any;
  rowSelection?: RowSelectionType;
  onEdit?: boolean;
  onDelete?: any;
  rowKey?: string;
  res?: any;
}
interface RowSelectionType {
  type?: "checkbox" | "radio";
  onChange?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
  selectedRowKeys?: React.Key[];
}

const CustomTable = async ({
  columns,
  props,
  rowSelection,
  onEdit,
  onDelete,
  rowKey,
  res,
}: Props) => {
  const LIMIT = 4;
  const page = props?.searchParams?.page ?? 1;

  const total_items = +(res.headers?.get("X-Total-Count") ?? 0);
  const data = await res.json();
  return (
    <FeTable
      data={data ? data : []}
      rowSelection={rowSelection ? { ...rowSelection } : undefined}
      columns={columns}
      onEdit={(onEdit ??= false)}
      onDelete={(onDelete ??= false)}
      rowKey={(rowKey ??= "id")}
      meta={{
        current: +page,
        pageSize: LIMIT,
        total: total_items,
      }}
      searchParams={props.searchParams}
    />
  );
};
export default CustomTable;
