"use client";
import { DatePicker, Select, Input } from "antd";
import type { DatePickerProps } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterDropdownProps {
  filterType: "date" | "datetime" | "select" | "text";
  dataIndex: string;
  options?: { value: string | number; label: string }[]; // For select type
  placeholder?: string;
  onChange?: (value: any) => void;
}

const FilterDropdown = ({
  filterType,
  dataIndex,
  options,
  placeholder = "",
  onChange,
}: FilterDropdownProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = useRouter();

  const handleFilterChange = (value: any) => {
    if (onChange) {
      onChange(value);
    }
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(dataIndex, value.toString());
    } else {
      params.delete(dataIndex);
    }
    params.delete("page");
    router.replace(`${pathname}?${params.toString()}`);
  };

  switch (filterType) {
    case "date":
      return (
        <DatePicker
          onChange={(date, dateString) => handleFilterChange(dateString)}
          placeholder={placeholder}
        />
      );
    case "datetime":
      return (
        <DatePicker
          showTime
          onChange={(date, dateString) => handleFilterChange(dateString)}
          placeholder={placeholder}
        />
      );
    case "select":
      return (
        <Select
          onChange={handleFilterChange}
          placeholder={placeholder}
          style={{ width: 200 }}
          options={options}
        />
      );
    case "text":
      return (
        <Input
          onChange={(e) => handleFilterChange(e.target.value)}
          placeholder={placeholder}
          allowClear
        />
      );
    default:
      return null;
  }
};

export default FilterDropdown;
