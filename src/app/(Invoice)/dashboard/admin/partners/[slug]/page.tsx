import partnersApi from "@/actions/partners";
import UpdatePartnersPage from "@/page/partners/update";
import { cookies } from "next/headers";
import React from "react";

export default async function Partners({
  params,
}: {
  params: { slug: string };
}) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const data = await partnersApi.getPartnersById(params.slug, accessToken);
  return <UpdatePartnersPage data={data.payload} />;
}
