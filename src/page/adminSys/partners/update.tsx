"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputField, SelectField } from "@/components/form";
import { Button, Grid } from "@mui/material";
import PATHS from "@/route/paths";
import { environmentList, typeList } from "./config";
import {
  PartnersBody,
  TUpdatePartnersBody,
  UpdatePartnersBody,
} from "@/schemaValidations/partners.schema";
import { useSnackbar } from "notistack";
import partnersApi from "@/actions/partners";

type Props = {
  data: any;
};

export default function UpdatePartnersPage({ data }: Props) {
  const { PATH_ADMINSYSTEM } = PATHS;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const methods = useForm<TUpdatePartnersBody>({
    resolver: zodResolver(UpdatePartnersBody),
    defaultValues: {
      ...data,
      additionalField: "", 
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: TUpdatePartnersBody) => {
    try { 
      const response = await partnersApi.updatePartners(values.id,values);
      console.log("values", values);
      if (response.status === 201) {
        router.push(PATH_ADMINSYSTEM.partners);
        enqueueSnackbar("Tạo thành công", { variant: "success" });
      }
    } catch (error: any) {
      console.log("error", error);
      enqueueSnackbar("Tạo thất bại", { variant: "error" });
    }
  };

  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputField name="name" label="Tên" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="description" label="Mô tả" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="apiUrl" label="API URL" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <SelectField name="type" label="Loại" options={typeList} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="environment"
            label="Môi trường"
            options={environmentList}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <InputField name="schemaConfig" label="schemaConfig" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="code" label="Code" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <InputField name="username" label="Username" fullWidth />
        </Grid>
        {/* <Grid item xs={4}>
          <InputField name="password" label="Password" fullWidth />
        </Grid> */}
        <Grid item xs={4}>
          <SelectField
            name="status"
            label="Status"
            options={[
              { label: "Active", value: 1 },
              { label: "Inactive", value: 0 },
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
