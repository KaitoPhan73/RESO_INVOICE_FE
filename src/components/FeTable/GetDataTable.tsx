import React from "react";

interface Result {
  total: number;
  list: any[];
}

interface GetDataProps {
  apiUrl?: string;
  dataSource?: any[];
  getData?: () => Promise<any>;
}

interface Params {
  current: number;
  pageSize: number;
}
const propsTable = async (props: GetDataProps) => {
  "use server";
  const getDataTable = async (
    { current, pageSize }: Params,
    formData: Object
  ): Promise<Result> => {
    const { dataSource, getData } = props;

    let query = `?page=${current}&limit=${pageSize}`;
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        query += `&${key}=${value}`;
      }
    });

    const res = await fetch(
      `https://660bbdb3ccda4cbc75dd950a.mockapi.io/api/student/users`,
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

    // if (dataSource) {
    //   const paginatedData = dataSource.slice(
    //     (current - 1) * pageSize,
    //     current * pageSize
    //   );
    //   return {
    //     total: dataSource.length,
    //     list: paginatedData,
    //   };
    // } else if (getData) {
    //   const data = await getData();
    //   return {
    //     total: data.total,
    //     list: data.items,
    //   };
    // } else {
    //   throw new Error("Either dataSource or getData must be provided.");
    // }
  };
  return getDataTable;
};

export default propsTable;
