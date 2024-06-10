import brandApi from "@/actions/brands";
import UpdateBrandPage from "@/page/adminSys/brands/update";
import { cookies } from "next/headers";
import React from "react";

export default async function UserDetail({
  params,
}: {
  params: { slug: string };
}) {
  const defaultParams = {
    page: 1,
    size: 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const response = await brandApi.getBrandById(params.slug, accessToken!);

  const data = {
    detail: response.payload,
    brandId: params.slug,
  };
  return <UpdateBrandPage data={data} />;
}
