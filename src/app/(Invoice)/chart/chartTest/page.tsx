import PartnersApi from "@/actions/partners";
import ChartPage from "@/page/chart/ChartPage";
import ChartStoresPage from "@/page/chart/BarChartStoresPage";
import LineChartStoresPage from "@/page/chart/LineChartStoresPage";
import React from "react";

export default async function ChartStores(props: any) {
  // const params = {
  //   page: props.searchParams.page ? +props.searchParams.page : 1,
  //   size: props.searchParams.size ? +props.searchParams.size : 10,
  // };
  // const cookieStore = cookies();
  // const accessToken = cookieStore.get("accessToken")?.value;
  // const response = await PartnersApi.getPartners(accessToken!, params);

  return (
    <>
      <ChartPage />
    </>
  );
}
