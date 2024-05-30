"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { InputField, SelectField } from "@/components/form";
import PATHS from "@/route/paths";
import { statusList } from "./config";
import invoiceTemplateApi from "@/actions/invoicetemplate";
import {
  InvoiceTemplateBody,
  TInvoiceTemplateBody,
} from "@/schemaValidations/invoiceTemplate.schema";
import { useQuery } from "react-query";
import { TOrganizationsBase } from "@/types/Organization";

export default function CreateInvoiceTemplatePage() {
  const { data: listOrganization } = useQuery("listOrganization", async () => {
    try {
      const response = await invoiceTemplateApi.getInvoiceTemplate(" ", {
        page: 1,
        size: 100,
      });
      return response.payload.items;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  });
  const transformedList: { value: string; label: string }[] = listOrganization
    ? listOrganization.map((item: any) => ({
        value: item.id,
        label: item.name,
      }))
    : [];

  const { PATH_DASHBOARD } = PATHS;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const methods = useForm<TInvoiceTemplateBody>({
    resolver: zodResolver(InvoiceTemplateBody),
    defaultValues: {
      organizationId: "0a95a4a1-2bf8-470e-987a-2c96a2495c21",
      organizationName: "",
      templateName: "",
      templateType: 3,
      invSeries: "",
      invoiceType: 3,
      status: 0,
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: TInvoiceTemplateBody) => {
    try {
      const response = await invoiceTemplateApi.createInvoiceTemplate(values);
      console.log("values", values);
      if (response.status === 201) {
        router.push(PATH_DASHBOARD.invoicetemplate);
        enqueueSnackbar("Tạo thành công", { variant: "success" });
      } else {
        enqueueSnackbar("Failed to create invoice template", {
          variant: "error",
        });
        console.log("Unexpected response", response);
      }
    } catch (error: any) {
      console.log("error", error);
      enqueueSnackbar("Error creating invoice template", { variant: "error" });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* <Grid item xs={4}>
            <InputField
              name="organizationId"
              label="Organization ID"
              fullWidth
            />
          </Grid> */}
          <Grid item xs={4}>
            <InputField
              name="organizationName"
              label="Organization Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <InputField name="templateName" label="Template Name" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <InputField name="templateType" label="Template Type" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <InputField name="invSeries" label="Invoice Series" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <InputField name="invoiceType" label="Invoice Type" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <SelectField
              name="status"
              label="Status"
              options={transformedList}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Tạo
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
