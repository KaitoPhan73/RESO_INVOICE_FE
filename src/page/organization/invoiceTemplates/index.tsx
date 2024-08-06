"use client";

import React from "react";
import Invoice from "./Invoice";
import dynamic from "next/dynamic";
import { TInvoice } from "@/schemaValidations/invoice.schema";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
type Props = {
  data: TInvoice;
};
const PDFViewerComponent = ({ data }: Props) => (
  <div style={{ height: "100vh", width: "100%" }}>
    <PDFViewer width="100%" height="100%">
      <Invoice data={data} />
    </PDFViewer>
  </div>
);

export default PDFViewerComponent;
