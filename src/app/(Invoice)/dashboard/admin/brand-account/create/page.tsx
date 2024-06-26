import accountApi from "@/actions/accounts";
import CreateBrandAccountPage from "@/page/adminSys/brand-account/create";
import { cookies } from "next/headers";
import React from "react";

export default async function createBrandAccount(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 100,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const response = await accountApi.getBrands(accessToken!, params);
  console.log("hiii: ",response);
  return <CreateBrandAccountPage props={props} brands={response.payload} />;
}
