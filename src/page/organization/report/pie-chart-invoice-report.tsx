"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, TooltipProps } from "recharts";
import { formatPriceVND } from "@/utils/formater";
import { chartConfig } from "./config";
import { TInvoiceReport } from "@/schemaValidations/invoice-report.schema";

type Props = {
  data: TInvoiceReport;
};
export default function PieChartInvoiceReport({ data }: Props) {
  const customTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const { label, value, fill } = payload[0].payload;
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            border: `1px solid ${fill}`,
          }}
        >
          <p style={{ color: fill }}>{label}</p>
          <p>{value}</p>
        </div>
      );
    }
    return null;
  };

  const chartData = [
    {
      label: "Tổng hóa đơn",
      value: data.totalInvoice,
      fill: "#3e7bff", // Màu xanh lá cây
    },
    {
      label: "Hóa đơn trong ngày",
      value: data.totalInvoiceReportInDate,
      fill: "#00b894", // Màu xanh biển
    },
    {
      label: "Hóa đơn đã lưu",
      value: data.draft,
      fill: "#fdcb6e", // Màu vàng
    },
    {
      label: "Hóa đơn thành công",
      value: data.success,
      fill: "#2ecc71", // Màu xanh lá cây
    },
    {
      label: "Hóa đơn đã gửi",
      value: data.sent,
      fill: "#00cec9", // Màu xanh biển nhạt
    },
    {
      label: "Hóa đơn chờ phê duyệt",
      value: data.pendingApproval,
      fill: "#fab1a0", // Màu hồng nhạt
    },
    {
      label: "Hóa đơn đã hoàn thành",
      value: data.completed,
      fill: "#55efc4", // Màu xanh lá cây nhạt
    },
    {
      label: "Hóa đơn thất bại",
      value: data.failed,
      fill: "#e74c3c", // Màu đỏ
    },
    {
      label: "Hóa đơn chờ xử lý",
      value: data.pending,
      fill: "#00cec9", // Màu xanh biển nhạt
    },
    {
      label: "Hóa đơn chờ thử lại",
      value: data.retryPending,
      fill: "#fdcb6e", // Màu vàng
    },
    {
      label: "Hóa đơn thay thế",
      value: data.replaced,
      fill: "#2ecc71", // Màu xanh lá cây
    },
  ];

  const formatTooltip = (value: any) => formatPriceVND(value);
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Phản hồi hóa đơn</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:flex sm:flex-col flex flex-col gap-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] lg:col-span-1 md:col-span-1 w-full"
        >
          <PieChart>
            <ChartTooltip content={customTooltip} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-3 lg:grid-cols-1 md:grid-cols-1 lg:flex-col md:flex-col items-start mt-4 overflow-y-auto h-56">
          {chartData.map((entry, index) => (
            <div
              key={`legend-${index}`}
              className="flex items-center mb-2 col-span-1 w-full"
            >
              <span
                className="inline-block w-4 h-4 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: entry.fill }}
              />
              <span className="truncate">
                {entry.label} ({entry.value})
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
