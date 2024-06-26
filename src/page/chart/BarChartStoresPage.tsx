  // import { useEffect, useRef } from "react";
  // import { Chart, ChartConfiguration, registerables } from "chart.js";

  // Chart.register(...registerables);

  // function BarChartStoresPage() {
  //   const chartRef = useRef<Chart | null>(null);

  //   useEffect(() => {
  //     const canvas = document.getElementById("myChart") as HTMLCanvasElement | null;

  //     if (canvas) {
  //       const ctx = canvas.getContext("2d");
  //       if (ctx) {
  //         if (chartRef.current) {
  //           chartRef.current.destroy();
  //         }

  //         const config: ChartConfiguration = {
  //           type: "bar",
  //           data: {
  //             labels: [
  //               "Sunday",
  //               "Monday",
  //               "Tuesday",
  //               "Wednesday",
  //               "Thursday",
  //               "Friday",
  //               "Saturday",
  //             ],
  //             datasets: [
  //               {
  //                 data: [21, 0, 0, 0, 0, 0, 0],
  //                 label: "Applied",
  //                 borderColor: "rgb(109, 253, 181)",
  //                 backgroundColor: "rgba(109, 253, 181, 0.5)",
  //                 borderWidth: 2,
  //               },
  //               {
  //                 data: [40, 100, 44, 70, 63, 30, 10],
  //                 label: "Accepted",
  //                 borderColor: "rgb(75, 192, 192)",
  //                 backgroundColor: "rgba(75, 192, 192, 0.5)",
  //                 borderWidth: 2,
  //               },
  //               {
  //                 data: [20, 24, 50, 34, 33, 23, 12],
  //                 label: "Pending",
  //                 borderColor: "rgb(255, 205, 86)",
  //                 backgroundColor: "rgba(255, 205, 86, 0.5)",
  //                 borderWidth: 2,
  //               },
  //               {
  //                 data: [6, 20, 52, 12, 11, 78, 21],
  //                 label: "Rejected",
  //                 borderColor: "rgb(255, 99, 132)",
  //                 backgroundColor: "rgba(255, 99, 132, 0.5)",
  //                 borderWidth: 2,
  //               },
  //             ],
  //           },
  //         };

  //         chartRef.current = new Chart(ctx, config);
  //       }
  //     }

  //     return () => {
  //       if (chartRef.current) {
  //         chartRef.current.destroy();
  //       }
  //     };
  //   }, []);

  //   return (
  //     <>
  //       <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize">
  //         Bar Chart
  //       </h1>
  //       <div className="w-[100px] h-[100px] flex mx-auto my-auto">
  //         <div className="border border-gray-400 pt-0 rounded-xl w-full h-full my-auto shadow-xl">
  //           <canvas id="myChart"></canvas>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // export default BarChartStoresPage;
