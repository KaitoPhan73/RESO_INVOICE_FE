"use client";
import { TTableResponse } from "@/types/Table";
import { TReportInvoicePaymentInDateSchemaResponse } from "@/schemaValidations/invoice.schema";
import { TInvoiceReport } from "@/schemaValidations/invoice-report.schema";
import { LineChartReport } from "./line-chart-report";
import PieChartReport from "./pie-chart-report";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import CardReports from "./card-report";
import PieChartInvoiceReport from "./pie-chart-invoice-report";

type Props = {
  data: {
    reportItems: TTableResponse<TReportInvoicePaymentInDateSchemaResponse>;
    reportInvoice: TInvoiceReport;
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
      <div className="col-span-12 lg:col-span-6">
        <PieChartInvoiceReport data={data.reportInvoice} />
      </div>
    </div>
  );
}
