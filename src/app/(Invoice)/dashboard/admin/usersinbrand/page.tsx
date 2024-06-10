import PartnersApi from "@/actions/partners";
import userApi from "@/actions/users";
import UsersInBrandPage from "@/page/adminSys/users";
import { cookies } from "next/headers";
import React from "react";

export default async function Users(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const brandId = JSON.parse(storeUser!).id;
  const response = await userApi.getUserByBrandId(
    brandId,
    accessToken!,
    params
  );
  console.log("hiii: ",response);

  return (
    <>
      <UsersInBrandPage props={props} data={response.payload} />
    </>
  );
}
