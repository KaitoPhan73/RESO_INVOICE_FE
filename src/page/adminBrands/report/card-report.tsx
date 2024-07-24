import React from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TTableResponse } from "@/types/Table";
import { TReportInvoicePaymentInDateSchemaResponse } from "@/schemaValidations/invoice.schema";
import { formatPriceVND } from "@/utils/formater";

type PropCardReport = {
  label: string;
  value: any;
  className?: string;
};

type Props = {
  data: TTableResponse<TReportInvoicePaymentInDateSchemaResponse>;
};

type TotalValues = {
  totalInvoice: number;
  totalTaxAmount: number;
  totalAmountAfterTax: number;
  totalSaleAmount: number;
  totalDiscountAmount: number;
  totalAmountWithoutTax: number;
  totalAmount: number;
};

type TotalLabels = {
  [key in keyof TotalValues]: string;
};

const CardReports = ({ data }: Props) => {
  const totalValues: TotalValues = {
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

  const totalLabels: TotalLabels = {
    totalInvoice: "Tổng hóa đơn",
    totalTaxAmount: "Tổng thuế",
    totalAmountAfterTax: "Tổng số tiền sau thuế",
    totalSaleAmount: "Tổng số tiền bán",
    totalDiscountAmount: "Tổng số tiền giảm giá",
    totalAmountWithoutTax: "Tổng số tiền chưa thuế",
    totalAmount: "Tổng số tiền",
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.keys(totalValues).map((key) => (
        <CardReport
          key={key}
          label={totalLabels[key as keyof TotalValues]}
          value={totalValues[key as keyof TotalValues]}
          className="col-span-2 md:col-span-1 lg:col-span-1"
        />
      ))}
    </div>
  );
};

const CardReport = ({ label, value, className }: PropCardReport) => {
  return (
    <Card x-chunk="dashboard-05-chunk-1" className={className}>
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-4xl">{formatPriceVND(value)}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CardReports;
