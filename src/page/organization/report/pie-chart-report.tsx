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
import { PieChart, Pie, Cell, TooltipProps } from "recharts";
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
          <p>{formatPriceVND(value)}</p>
        </div>
      );
    }
    return null;
  };

  const chartData = [
    {
      label: chartConfig.totalInvoiceReportInDate.label,
      value: totalValues.totalInvoice,
      fill: chartConfig.totalInvoiceReportInDate.color,
    },
    {
      label: chartConfig.totalTaxAmountReport.label,
      value: totalValues.totalTaxAmount,
      fill: chartConfig.totalTaxAmountReport.color,
    },
    {
      label: chartConfig.totalAmountAfterTaxReport.label,
      value: totalValues.totalAmountAfterTax,
      fill: chartConfig.totalAmountAfterTaxReport.color,
    },
    {
      label: chartConfig.totalSaleAmountReport.label,
      value: totalValues.totalSaleAmount,
      fill: chartConfig.totalSaleAmountReport.color,
    },
    {
      label: chartConfig.totalDiscountAmountReport.label,
      value: totalValues.totalDiscountAmount,
      fill: chartConfig.totalDiscountAmountReport.color,
    },
    {
      label: chartConfig.totalAmountWithoutTaxReport.label,
      value: totalValues.totalAmountWithoutTax,
      fill: chartConfig.totalAmountWithoutTaxReport.color,
    },
    {
      label: chartConfig.totalAmountReport.label,
      value: totalValues.totalAmount,
      fill: chartConfig.totalAmountReport.color,
    },
  ];
  const formatTooltip = (value: any) => formatPriceVND(value);
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Tổng hóa đơn</CardTitle>
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
        <div className="grid grid-cols-3 lg:grid-cols-1 md:grid-cols-1 lg:flex-col md:flex-col items-start mt-4">
          {chartData.map((entry, index) => (
            <div
              key={`legend-${index}`}
              className="flex items-center mb-2 col-span-1 w-full overflow-hidden"
            >
              <span
                className="inline-block w-4 h-4 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: entry.fill }}
              />
              <span className="truncate">{entry.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
