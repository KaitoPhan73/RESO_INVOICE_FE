// import CreateOrganizationinBrandPage from "@/page/adminBrands/organizations/create";
// import React from "react";
// import { cookies } from "next/headers";
// import brandApi from "@/actions/brands";

// export default async function createOrganization(props: any) {
//   const params = { 
//     page: props.searchParams.page ? +props.searchParams.page : 1,
//     size: props.searchParams.size ? +props.searchParams.size : 100,
//   };
//   const cookieStore = cookies();
//   const accessToken = cookieStore.get("accessToken")?.value;
//   const storeUser = cookieStore.get("user")?.value;
//   const brandId = JSON.parse(storeUser!).brandId;
//   const response = await brandApi.getBrandById(
//     brandId,
//     accessToken!,
//     params
//   );
//   return <CreateOrganizationinBrandPage props={props} brands={response.payload}/>;
// }

import CreateOrganizationinBrandPage from "@/page/adminBrands/organizations/create";
import React from "react";
import { cookies } from "next/headers";
import brandApi from "@/actions/brands";

export default async function createOrganization() {

  return <CreateOrganizationinBrandPage/>;
}

