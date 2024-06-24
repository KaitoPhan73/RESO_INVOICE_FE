"use client";
import TableRender from "@/components/FeTable/TableRender";
import Page from "@/components/PageProps";
import TyphoField from "@/components/TyphoField ";
import { TInvoiceReport } from "@/schemaValidations/invoice-report.schema";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { Grid } from "@mui/material";
import { DatePicker, TableColumnsType, Tag } from "antd";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
interface Props {
  props: any;
  data: any;
}
export default function InvoiceReportInvoicePage({ props, data }: Props) {
  const methods = useForm<TInvoiceReport>({
    defaultValues: {
      ...data,
    },
  });

  return (
    <FormProvider {...methods}>
      <Page title="Báo cáo">
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={2}>
            <TyphoField name="totalInvoice" label="Tổng hóa đơn" showBorder />
          </Grid>
          <Grid item xs={6} md={6} lg={2}>
            <TyphoField name="sent" label="Đã gửi" showBorder />
          </Grid>
          <Grid item xs={6} md={6} lg={2}>
            <TyphoField
              name="pendingApproval"
              label="Chờ phê duyệt"
              showBorder
            />
          </Grid>
          <Grid item xs={6} md={6} lg={2}>
            <TyphoField name="pending" label="Đang giải quyết" showBorder />
          </Grid>
          <Grid item xs={6} md={6} lg={2}>
            <TyphoField name="completed" label="Đã hoàn thành" showBorder />
          </Grid>
          <Grid item xs={6} md={6} lg={2}>
            <TyphoField name="failed" label="Thất bại" showBorder />
          </Grid>
        </Grid>
      </Page>
    </FormProvider>
  );
}
