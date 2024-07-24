"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TTableResponse } from "@/types/Table";
import { TReportInvoicePaymentInDateSchemaResponse } from "@/schemaValidations/invoice.schema";
import { formatPriceVND, formattedDate } from "@/utils/formater";
import { chartConfig } from "./config";

type Props = {
  data: TTableResponse<TReportInvoicePaymentInDateSchemaResponse>;
};

export function LineChartReport({ data }: Props) {
  const formatTooltip = (value: any) => formatPriceVND(value);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Biểu đồ theo ngày</CardTitle>
        {/* <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data.items}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => formattedDate(value)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={10}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  // formatter={formatTooltip}
                  labelFormatter={(label) => formattedDate(label)}
                />
              }
            />

            {(Object.keys(chartConfig) as Array<keyof typeof chartConfig>).map(
              (key) => (
                <Line
                  key={key}
                  dataKey={key}
                  type="monotone"
                  fill={chartConfig[key].color}
                  fillOpacity={0.4}
                  stroke={chartConfig[key].color}
                  dot={false}
                />
              )
            )}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            {/* <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div> */}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
