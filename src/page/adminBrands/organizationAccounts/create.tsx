"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { InputField, SelectField } from "@/components/form";
import PATHS from "@/route/paths";
import { statusList } from "./config";
import { CreateOrganizationAccountBody, TCreateOrganizationAccountBody } from "@/schemaValidations/organizationaccounts.schema";
import { TOrganizationsBody } from "@/schemaValidations/organizations.schema";
import organizationsApi from "@/actions/organizations";

interface Props {
  props: any;
  organizations: any;
}

export default function CreateOrganizationAccountPage({ organizations }: Props) {
  const { PATH_BRAND } = PATHS;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const methods = useForm<TCreateOrganizationAccountBody>({
    resolver: zodResolver(CreateOrganizationAccountBody),
    defaultValues: {
      username: "",
      name: "",
      password: "",
      status: "",
      role: 1,
      organizationId: "",
      brandId: "",

    },
  });

  const optionOrganization = organizations.items.map((item: TOrganizationsBody) => ({
    label: item.name,
    value: item.id,
  }));

  const optionBrand = organizations.items.map((item: TOrganizationsBody) => ({
    label: item.brandName,
    value: item.brandId,
  }));

  const { handleSubmit } = methods;

  const onSubmit = async (values: TCreateOrganizationAccountBody) => {
    try {
      const response = await organizationsApi.createOrganizationAccount(values.organizationId, values);
      console.log("Submitted values:", values); 
      if (response.status === 201) {
        router.push(PATH_BRAND.organizationaccounts);
        enqueueSnackbar("Tạo thành công", { variant: "success" });
      }
    } catch (error: any) {
      console.log("Submission error:", error); 
      enqueueSnackbar("Tạo thất bại", { variant: "error" });
    }
  };
  

  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputField name="username" label="UserName" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="name" label="Name" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="password" label="Password" fullWidth/>
        </Grid>
        <Grid item xs={4}>
          <InputField name="name" label="Name" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="status" label="Status" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="brandId"
            label="Brand Name"
            options={optionBrand}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="organizationId"
            label="Organization Name"
            options={optionOrganization}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
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
      </Grid>
    </FormProvider>
  );
}
