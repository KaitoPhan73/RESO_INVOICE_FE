"use client";
import { TTableResponse } from "@/types/Table";
import { TReportInvoicePaymentInDateSchemaResponse } from "@/schemaValidations/invoice.schema";
import { TInvoiceReport } from "@/schemaValidations/invoice-report.schema";
import { LineChartReport } from "./line-chart-report";
import PieChartReport from "./pie-chart-report";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import CardReports from "./card-report";
import PieChartInvoiceReport from "./pie-chart-invoice-report";
import { BarChartReport } from "./bar-chart-report";
import { SelectCustom } from "@/components/select-custom";

type Props = {
  data: {
    reportItems: TTableResponse<TReportInvoicePaymentInDateSchemaResponse>;
    reportInvoice: any;
    selects: any[];
  };
};

export function ReportInvoce({ data }: Props) {
  const options = data.selects.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 flex flex-col lg:flex-row lg:items-center gap-4">
        <DatePickerWithRange />
        <SelectCustom
          options={options}
          name={data.reportInvoice ? "store" : "organization"}
          label={data.reportInvoice ? "Chọn cửa hàng" : "Chọn tổ chức"}
        />
      </div>

      <div className="col-span-12">
        <CardReports data={data.reportItems} />
      </div>

      <div className="col-span-12 lg:col-span-6 md:col-span-6">
        <LineChartReport data={data.reportItems} />
      </div>
      <div className="col-span-12 lg:col-span-6 md:col-span-6">
        <BarChartReport data={data.reportItems} />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <PieChartReport data={data.reportItems} />
      </div>
      {data.reportInvoice && (
        <div className="col-span-12 lg:col-span-6">
          <PieChartInvoiceReport data={data.reportInvoice} />
        </div>
      )}
    </div>
  );
}
