import accountApi from "@/actions/accounts";;
import BrandAccountPage from "@/page/adminSys/brand-account";
import { cookies } from "next/headers";
import React from "react";

export default async function BrandAccounts(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const response = await accountApi.getBrandAccount(accessToken!, params);
  console.log("hiii: ",response);

  return (
    <>
      <BrandAccountPage props={props} data={response.payload} />
    </>
  );
}
