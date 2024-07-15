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
import { formatDate, formattedDate } from "@/utils/formater";
import { TInvoiceReport } from "@/schemaValidations/invoice-report.schema";
import { LineChartReport } from "./line-chart-report";
import PieChartReport from "./pie-chart-report";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import CardReports from "./card-report";

type Props = {
  data: {
    reportItems: TTableResponse<TReportInvoicePaymentInDateSchemaResponse>;
    // reportTotal: TInvoiceReport;
  };
};

export function ReportInvoce({ data }: Props) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <DatePickerWithRange />
      </div>
      <div className="col-span-12">
        <CardReports data={data.reportItems} />
      </div>

      <div className="col-span-12 ">
        <LineChartReport data={data.reportItems} />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <PieChartReport data={data.reportItems} />
      </div>
    </div>
  );
}
