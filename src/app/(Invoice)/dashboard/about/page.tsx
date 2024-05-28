// "use server";
// import { getBrands } from "@/app/actions/brands";
// import BrandPage from "@/page/about";
// import { log } from "console";
// import React from "react";

// const Brands = async (props: any) => {
//   // const test = await getBrands({ page: 1, size: 10 });
//   // console.log(test.payload.items);
//   const a = await fetch(
//     "https://660bbdb3ccda4cbc75dd950a.mockapi.io/api/users",
//     {
//       method: "GET",
//     }
//   );
//   const data = await a.json();
//   console.log("data", data);
//   console.log("status", a.status);
//   return <BrandPage props={props} />;
// };
// export default Brands;

import apiClient from "@/app/api/auth/apiClient";
import { TBrandBase } from "@/types/Brand";

export async function getBrands(): Promise<TBrandBase[]> {
  try {
    const response = await apiClient.get("/brands");
    const data = await response.json(); // Trích xuất dữ liệu JSON từ phản hồi
    return data.items; // Truy cập vào thuộc tính 'items' của dữ liệu JSON
  } catch (error) {
    console.error("Failed to fetch brands", error);
    throw error;
  }
}

export default getBrands;
