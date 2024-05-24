"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: any }) {
  console.log("error", error);
  switch (error.statusCode) {
    case 401:
      return <div>Bạn không có quyền truy cập tài nguyên này</div>;
    case 403:
      return <div>Bạn không được phép truy cập tài nguyên này</div>;
    case 500:
      return <div>Có lỗi xảy ra trên máy chủ</div>;
    default:
      return <div>Có lỗi xảy ra: {error.message}</div>;
  }
}
