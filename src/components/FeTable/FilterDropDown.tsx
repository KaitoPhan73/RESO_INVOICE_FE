// src/components/FilterDropdown.tsx

import React from "react";
import { Select } from "antd";

interface FilterDropdownProps {
  filterType: "sorter"; // Chỉ xử lý cho filterType là "sorter"
  dataIndex: string;
  onFilterChange: (key: string, value: any) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  filterType,
  dataIndex,
  onFilterChange,
}) => {
  if (filterType !== "sorter") {
    return null;
  }

  return (
    <Select
      defaultValue=""
      onChange={(value) => onFilterChange(dataIndex, value)}
    >
      <Select.Option value="">Không sắp xếp</Select.Option>
      <Select.Option value="ascend">Sắp xếp tăng dần</Select.Option>
      <Select.Option value="descend">Sắp xếp giảm dần</Select.Option>
    </Select>
  );
};

export default FilterDropdown;
