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
import { TReportInvoicePaymentInDateSchemaResponse } from "@/schemaValidations/invoice.schema";
import { TTableResponse } from "@/types/Table";
import { PieChart, Pie, Cell } from "recharts";
import { formatPriceVND } from "@/utils/formater";
import { chartConfig } from "./config";

type Props = {
  data: TTableResponse<TReportInvoicePaymentInDateSchemaResponse>;
};
export default function PieChartReport({ data }: Props) {
  const totalValues = {
    totalInvoice: data.items.reduce(
      (sum, item) => sum + Number(item.totalInvoiceReportInDate),
      0
    ),
    totalTaxAmount: data.items.reduce(
      (sum, item) => sum + Number(item.totalTaxAmountReport),
      0
    ),
    totalAmountAfterTax: data.items.reduce(
      (sum, item) => sum + Number(item.totalAmountAfterTaxReport),
      0
    ),
    totalSaleAmount: data.items.reduce(
      (sum, item) => sum + Number(item.totalSaleAmountReport),
      0
    ),
    totalDiscountAmount: data.items.reduce(
      (sum, item) => sum + Number(item.totalDiscountAmountReport),
      0
    ),
    totalAmountWithoutTax: data.items.reduce(
      (sum, item) => sum + Number(item.totalAmountWithoutTaxReport),
      0
    ),
    totalAmount: data.items.reduce(
      (sum, item) => sum + Number(item.totalAmountReport),
      0
    ),
  };

  // Chuyển đổi dữ liệu totalValues sang dạng mảng chartData
  const chartData = [
    {
      key: chartConfig.totalInvoiceReportInDate.label,
      value: totalValues.totalInvoice,
      fill: chartConfig.totalInvoiceReportInDate.color,
    },
    {
      key: chartConfig.totalTaxAmountReport.label,
      value: totalValues.totalTaxAmount,
      fill: chartConfig.totalTaxAmountReport.color,
    },
    {
      key: chartConfig.totalAmountAfterTaxReport.label,
      value: totalValues.totalAmountAfterTax,
      fill: chartConfig.totalAmountAfterTaxReport.color,
    },
    {
      key: chartConfig.totalSaleAmountReport.label,
      value: totalValues.totalSaleAmount,
      fill: chartConfig.totalSaleAmountReport.color,
    },
    {
      key: chartConfig.totalDiscountAmountReport.label,
      value: totalValues.totalDiscountAmount,
      fill: chartConfig.totalDiscountAmountReport.color,
    },
    {
      key: chartConfig.totalAmountWithoutTaxReport.label,
      value: totalValues.totalAmountWithoutTax,
      fill: chartConfig.totalAmountWithoutTaxReport.color,
    },
    {
      key: chartConfig.totalAmountReport.label,
      value: totalValues.totalAmount,
      fill: chartConfig.totalAmountReport.color,
    },
  ];
  const formatTooltip = (value: any) => formatPriceVND(value);
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Tổng hóa đơn</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 grid grid-cols-2 gap-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              formatter={formatTooltip}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="key"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="flex flex-col items-start mt-4">
          {chartData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
              <span
                className="inline-block w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: entry.fill }}
              />
              <span>{entry.key}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
