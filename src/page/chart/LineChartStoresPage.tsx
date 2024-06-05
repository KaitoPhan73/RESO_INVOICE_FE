import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";

Chart.register(...registerables);

function LineChartStoresPage() {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = document.getElementById(
      "myChart"
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy(); // Destroy existing chart
        }
        const config: ChartConfiguration = {
          type: "line",
          data: {
            labels: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            datasets: [
              {
                data: [86, 114, 106, 106, 107, 111, 133],
                label: "Applied",
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
                fill: false,
              },
              {
                data: [70, 90, 44, 60, 83, 90, 100],
                label: "Accepted",
                borderColor: "#3cba9f",
                backgroundColor: "#71d1bd",
                fill: false,
              },
              {
                data: [10, 21, 60, 44, 17, 21, 17],
                label: "Pending",
                borderColor: "#ffa500",
                backgroundColor: "#ffc04d",
                fill: false,
              },
              {
                data: [6, 3, 2, 2, 7, 0, 16],
                label: "Rejected",
                borderColor: "#c45850",
                backgroundColor: "#d78f89",
                fill: false,
              },
            ],
          },
        };
        chartRef.current = new Chart(ctx, config);
      }
    }
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // No dependencies needed here

  return (
    <>
      <h1 className="w-[110px] mx-auto mt-10 text-s font-semibold capitalize ">
        Line Chart
      </h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-s w-full h-fit my-auto shadow-s">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default LineChartStoresPage;
