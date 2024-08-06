"use client"; 

import React from 'react';
import Invoice from "./Invoice";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
const PDFViewerComponent: React.FC = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <PDFViewer width="100%" height="100%">
      <Invoice />
    </PDFViewer>
  </div>
);

export default PDFViewerComponent;
