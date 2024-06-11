"use client"
import brandApi from "@/actions/brands";
import { BrandBody, TBrandAccountBody, TBrandBody } from "@/schemaValidations/brand.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputField, SelectField } from "@/components/form";
import { Button, Grid } from "@mui/material";
import PATHS from "@/route/paths";
import { statusList } from "../brands/config";

interface Props {
  props: any;
  brands: any;
}

export default function CreateBrandAccountPage({ brands }: Props) {
  const { PATH_DASHBOARD } = PATHS;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const options = brands.items.map((item: TBrandBody) => ({
    label: item.name, value: item.brandId
  }))
  console.log("dsdsdsd", options)
  const methods = useForm<TBrandAccountBody>({
    resolver: zodResolver(BrandBody),
    defaultValues: {
      brandId: "",
      username: "cccc",
      name: "ccc",
      password: "cailon",
      status: 0,
      role: 0,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values: TBrandAccountBody) => {
    console.log("ccccccccc",values);
    try {
      // const response = await brandApi.createBrandAccount(values.brandId, values);
      // console.log("values", values);
      // if (response.status === 201) {
      //   router.push(PATH_DASHBOARD.partners);
      //   enqueueSnackbar("Tạo thành công", { variant: "success" });
      // }
    } catch (error: any) {
      console.log("error", error);
      enqueueSnackbar("Tạo thất bại", { variant: "error" });
    }
  };

  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SelectField
            name="brandId"
            label="Brand"
            options={options}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <InputField name="username" label="Username" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="name" label="Name" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="password" label="Password" fullWidth type="password" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="status"
            label="Status"
            options={statusList}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="role"
            label="Role"
            options={[
              { label: "Admin", value: 0 },
              { label: "User", value: 1 }
            ]}
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
