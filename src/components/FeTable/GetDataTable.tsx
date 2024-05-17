"use server";
import React from "react";

interface Result {
  total: number;
  list: any[];
}
interface Params {
  current: number;
  pageSize: number;
}
const getDataTable = async (
  apiUrl: string, // Thêm tham số apiUrl vào hàm
  { current, pageSize }: Params,
  formData: Object
): Promise<Result> => {
  let query = `?page=${current}&limit=${pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });

  const res = await fetch(
    apiUrl, // Sử dụng apiUrl thay vì URL cố định
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const data = await res.json();

  return {
    total: data.length,
    list: data,
  };
};

export default getDataTable;
