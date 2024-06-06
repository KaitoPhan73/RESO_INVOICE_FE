"use client";
import ChartStoresPage from "@/page/chart/BarChartStoresPage";
import React, { useState } from "react";
import LineChartStoresPage from "./LineChartStoresPage";
import { Button } from "antd";

export default function ChartPage(props: any) {
  const [selectedChart, setSelectedChart] = useState("bar");

  const handleSelectChart = (chartType: string) => {
    setSelectedChart(chartType);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          type={selectedChart === "bar" ? "primary" : "default"}
          onClick={() => handleSelectChart("bar")}
          style={{ marginRight: "10px" }}
        >
          Bar Chart
        </Button>
        <Button
          type={selectedChart === "line" ? "primary" : "default"}
          onClick={() => handleSelectChart("line")}
        >
          Line Chart
        </Button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {selectedChart === "bar" && <ChartStoresPage />}
        {selectedChart === "line" && <LineChartStoresPage />}
      </div>
    </>
  );
}
