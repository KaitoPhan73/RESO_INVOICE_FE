"use client";
import Page from "@/components/PageProps";
import TyphoField from "@/components/TyphoField ";
import { TvanStatus } from "@/enums/partner-invoice-history.enum";
import {
  PartnerInvoiceHistorySchema,
  TPartnerInvoiceHistoryRequest,
  TPartnerInvoiceHistoryResponse,
} from "@/schemaValidations/partner-invoice-history.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Grid } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { invoiceStatusConfig, statusConfig, tvanStatusConfig } from "./config";
import { formattedDateTime } from "@/utils/formater";
type Props = {
  data: TPartnerInvoiceHistoryResponse;
};

export default function OrganizationsPartnerInvoiceHistoryPage({
  data,
}: Props) {
  const methods = useForm<TPartnerInvoiceHistoryRequest>({
    resolver: zodResolver(PartnerInvoiceHistorySchema),
    defaultValues: {
      ...data,
    },
  });

  //   const { handleSubmit, control } = methods;

  //   const onSubmit = (values: TInvoice) => {
  //     console.log("Form submitted with values:", values);
  //     // Xử lý logic khi submit form ở đây (ví dụ: gửi dữ liệu lên server)
  //   };
  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Card style={{ width: "100%" }}>
            <Grid container item xs={12} spacing={1}>
              <Page title="Lịch sử hóa đơn với đối tác" spacing={2}>
                <Grid item xs={6} md={6} lg={3}>
                  <TyphoField
                    name="invoiceCode"
                    label="Mã hóa đơn"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <TyphoField
                    name="partnerCode"
                    label="Mã đối tác"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <TyphoField
                    name="createDate"
                    label="Ngày tạo hóa đơn"
                    fullWidth
                    showBorder
                    convert={formattedDateTime}
                  />
                </Grid>

                <Grid item xs={6} md={6} lg={3}>
                  <TyphoField
                    name="config"
                    label="Cấu hình hóa đơn"
                    fullWidth
                    showBorder
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <TyphoField
                    name="vnPayInvoiceStatus.tvanStatus"
                    label="Trạng thái TVAN"
                    fullWidth
                    options={tvanStatusConfig}
                    showBorder
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <TyphoField
                    name="vnPayInvoiceStatus.status"
                    label="Trạng thái hóa đơn VNPay"
                    fullWidth
                    options={statusConfig}
                    showBorder
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <TyphoField
                    name="vnPayInvoiceStatus.invoiceStatus"
                    label="Trạng thái hóa đơn"
                    fullWidth
                    options={invoiceStatusConfig}
                    showBorder
                  />
                </Grid>
              </Page>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
