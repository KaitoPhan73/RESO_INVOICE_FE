"use client";
import organizationApi from "@/actions/organizations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputField, SelectField } from "@/components/form";
import { Button, Grid } from "@mui/material";
import PATHS from "@/route/paths";
import { statusList } from "./config";
import {
  OrganizationsBody,
  TOrganizationsBody,
} from "@/schemaValidations/organizations.schema";

export default function CreateOrganizationPage() {
  const { PATH_DASHBOARD } = PATHS;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const methods = useForm<TOrganizationsBody>({
    resolver: zodResolver(OrganizationsBody),
    defaultValues: {
      name: "",
      address: "",
      representative: "",
      taxCode: "",
      brandId: "",
      brandName: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: TOrganizationsBody) => {
    // try {
    //   const response = await organizationApi.createOrganizations(values);
    //   console.log("values", values);
    //   if (response.status === 201) {
    //     router.push(PATH_DASHBOARD.organizations);
    //     enqueueSnackbar("Tạo thành công", { variant: "success" });
    //   }
    // } catch (error: any) {
    //   console.log("error", error);
    // }
  };
  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputField name="name" label="Tên" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="address" label="Địa chỉ" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="representative" label="Người đại diện" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="taxCode" label="Mã số thuế" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="brandId" label="ID Thương hiệu" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="brandName" label="Tên Thương hiệu" fullWidth />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit(onSubmit)}
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Tạo
        </Button>
      </Grid>
    </FormProvider>
  );
}
