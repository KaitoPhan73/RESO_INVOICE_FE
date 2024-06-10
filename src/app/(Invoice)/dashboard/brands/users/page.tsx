import brandApi from "@/actions/brands";
import UsersInBrandPage from "@/page/adminBrands/users";
import { cookies } from "next/headers";
import React from "react";

export default async function UsersInBrand(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const brandId = JSON.parse(storeUser!).brandId;
  const response = await brandApi.getUserByBrandId(
    brandId,
    accessToken!,
    params
  );
  console.log("ehehe",response.payload)

  return (
    <>
      <UsersInBrandPage props={props} data={response.payload} />
    </>
  );
}
